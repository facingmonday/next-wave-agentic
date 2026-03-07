const MAX_MESSAGE_CHARS = Number(process.env.AI_MAX_MESSAGE_CHARS) || 25000;

const INJECTION_PATTERNS: Array<{ name: string; re: RegExp }> = [
  {
    name: "ignore_instructions",
    re: /\bignore\s+(all|any|previous|prior|the above)\s+(instructions|rules|messages)\b/gi,
  },
  {
    name: "reveal_system_prompt",
    re: /\b(reveal|show|print|dump)\b[\s\S]{0,60}\b(system|developer)\b[\s\S]{0,60}\b(prompt|message|instructions)\b/gi,
  },
  { name: "role_system", re: /\brole\s*:\s*system\b/gi },
  { name: "developer_message", re: /\bdeveloper\s+message\b/gi },
  { name: "jailbreak", re: /\b(jailbreak|dan|prompt\s*injection)\b/gi },
  { name: "exfiltrate", re: /\b(exfiltrate|leak|steal)\b/gi },
];

function truncate(value: string, max: number): string {
  const s = typeof value === "string" ? value : String(value ?? "");
  if (s.length <= max) return s;
  return s.slice(0, max) + "\n[TRUNCATED]";
}

export function getInjectionSignals(text: string): {
  signals: string[];
  isHighRisk: boolean;
} {
  const s = typeof text === "string" ? text : String(text ?? "");
  const signals: string[] = [];
  for (const p of INJECTION_PATTERNS) {
    if (p.re.test(s)) {
      signals.push(p.name);
    }
    p.re.lastIndex = 0;
  }
  return { signals, isHighRisk: signals.length >= 2 };
}

export function sanitizeUntrustedString(text: string): string {
  let out = typeof text === "string" ? text : String(text ?? "");
  for (const p of INJECTION_PATTERNS) {
    out = out.replace(p.re, "[REDACTED]");
    p.re.lastIndex = 0;
  }
  out = out.replace(/^(system|developer)\s*:/gim, "[REDACTED]:");
  return out;
}

/**
 * Harden user message for OpenAI: truncate and optionally sanitize on injection signals.
 */
export function hardenUserMessage(text: string): string {
  const truncated = truncate(String(text ?? ""), MAX_MESSAGE_CHARS);
  const { signals, isHighRisk } = getInjectionSignals(truncated);
  if (!isHighRisk) {
    return truncated;
  }
  console.warn("Prompt injection signals detected; sanitizing message.", {
    signals,
  });
  return sanitizeUntrustedString(truncated);
}
