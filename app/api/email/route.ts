import { NextResponse } from "next/server";

type ContactEmailRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function basicEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() ?? "");
}

export async function POST(request: Request) {
  const openclawWebhookUrl = process.env.OPENCLAW_CONTACT_WEBHOOK_URL;
  const openclawWebhookToken = process.env.OPENCLAW_CONTACT_WEBHOOK_TOKEN;

  if (!openclawWebhookUrl?.trim()) {
    return NextResponse.json(
      { error: "OPENCLAW_CONTACT_WEBHOOK_URL is not configured" },
      { status: 500 },
    );
  }

  if (!openclawWebhookToken?.trim()) {
    return NextResponse.json(
      { error: "OPENCLAW_CONTACT_WEBHOOK_TOKEN is not configured" },
      { status: 500 },
    );
  }

  let body: ContactEmailRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!email || !basicEmailFormat(email)) {
    return NextResponse.json(
      { error: "email is required and must be a valid email address" },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const leadText = [
    "New Next Wave Agentic Contact Form Lead",
    "",
    `Name: ${name ?? "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const webhookPayload = {
    message: leadText,
    data: {
      type: "nextwaveagentic.contact_form.submitted",
      source: "nextwaveagentic.com",
      submittedAt: new Date().toISOString(),
      contact: { name: name ?? null, phone: phone || null, email },
      message,
    },
  };

  try {
    const res = await fetch(openclawWebhookUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openclawWebhookToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    });

    const text = await res.text().catch(() => "");

    if (!res.ok) {
      return NextResponse.json(
        { error: `OpenClaw webhook failed (${res.status})`, details: text },
        { status: 502 },
      );
    }

    // Return runId to help debugging
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = text;
    }

    return NextResponse.json({ success: true, openclaw: parsed });
  } catch (e) {
    const err = e instanceof Error ? e.message : "OpenClaw webhook failed";
    return NextResponse.json({ error: err }, { status: 502 });
  }
}
