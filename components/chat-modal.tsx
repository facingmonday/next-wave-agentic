"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  CHAT_MODAL_OPEN_EVENT,
  CHAT_MODAL_CLOSE_EVENT,
} from "@/lib/smooth-scroll";

/** Dispatch this event with { detail: { prompt: string } } to open chat with pre-filled prompt */
export const CHAT_OPEN_WITH_PROMPT_EVENT = "nwa-open-chat";

type Message = { id: string; role: "user" | "assistant"; content: string };
const CHAT_RESPONSE_ID_STORAGE_KEY = "nwa-chat-previous-response-id";
const CHAT_LEGACY_CONVERSATION_STORAGE_KEY = "nwa-chat-conversation-id";
const CHAT_MESSAGES_STORAGE_KEY = "nwa-chat-messages";

function normalizeResponseId(id?: string | null): string | null {
  const trimmed = id?.trim();
  return trimmed?.startsWith("resp_") ? trimmed : null;
}

function parseStoredMessages(raw: string | null): Message[] | null {
  if (!raw?.trim()) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return null;
    const out: Message[] = [];
    for (const item of parsed) {
      if (
        item &&
        typeof item === "object" &&
        typeof (item as Message).id === "string" &&
        ((item as Message).role === "user" ||
          (item as Message).role === "assistant") &&
        typeof (item as Message).content === "string"
      ) {
        out.push({
          id: (item as Message).id,
          role: (item as Message).role,
          content: (item as Message).content,
        });
      }
    }
    return out.length > 0 ? out : null;
  } catch {
    return null;
  }
}

function useAutoResizeTextarea(
  ref: React.RefObject<HTMLTextAreaElement | null>,
) {
  const adjust = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [ref]);

  useEffect(() => {
    adjust();
  }, [adjust]);

  return adjust;
}

export default function ChatModal() {
  const TYPE_DELAY_MS = 12;
  const TYPE_CHUNK_MIN = 1;
  const TYPE_CHUNK_MAX = 4;
  const TYPE_PUNCTUATION_PAUSE_MS = 85;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previousResponseId, setPreviousResponseId] = useState<string | null>(
    null,
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const adjustHeight = useAutoResizeTextarea(textareaRef);
  const close = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(CHAT_MODAL_CLOSE_EVENT));
    }
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Notify smooth scroll when modal opens so Lenis stops and modal messages can scroll
  useEffect(() => {
    if (!isOpen) return;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(CHAT_MODAL_OPEN_EVENT));
    }
  }, [isOpen]);

  // Resize textarea when input changes so it grows to fit
  useEffect(() => {
    adjustHeight();
  }, [input, adjustHeight]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => textareaRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Listen for open-with-prompt from other parts of the app
  useEffect(() => {
    const handler = (e: CustomEvent<{ prompt: string }>) => {
      const prompt = e.detail?.prompt;
      if (typeof prompt === "string" && prompt.trim()) {
        setInput(prompt.trim());
        setIsOpen(true);
        adjustHeight();
        setTimeout(() => textareaRef.current?.focus(), 0);
      }
    };
    window.addEventListener(
      CHAT_OPEN_WITH_PROMPT_EVENT,
      handler as EventListener,
    );
    return () =>
      window.removeEventListener(
        CHAT_OPEN_WITH_PROMPT_EVENT,
        handler as EventListener,
      );
  }, [adjustHeight]);

  const getChunkPause = (chunk: string) => {
    const endsWithStrongPause = /[.!?]["')\]]?$/.test(chunk);
    const endsWithSoftPause = /[,;:]["')\]]?$/.test(chunk);
    if (endsWithStrongPause) return TYPE_PUNCTUATION_PAUSE_MS;
    if (endsWithSoftPause) return Math.floor(TYPE_PUNCTUATION_PAUSE_MS * 0.55);
    return 0;
  };

  const typeAssistantMessage = async (id: string, fullText: string) => {
    let index = 0;
    while (index < fullText.length) {
      const remaining = fullText.length - index;
      const chunkSize = Math.min(
        remaining,
        Math.floor(Math.random() * (TYPE_CHUNK_MAX - TYPE_CHUNK_MIN + 1)) +
          TYPE_CHUNK_MIN,
      );
      index += chunkSize;

      const nextText = fullText.slice(0, index);
      const chunk = fullText.slice(index - chunkSize, index);
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, content: nextText } : m)),
      );

      await new Promise((resolve) =>
        setTimeout(resolve, TYPE_DELAY_MS + getChunkPause(chunk)),
      );
    }
  };

  // Auto-scroll to bottom whenever messages or loading state changes so new content is visible
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

  // On mount: restore response ID and any stored message history so refresh doesn't lose the conversation.
  useEffect(() => {
    const currentStoredResponseId = normalizeResponseId(
      window.localStorage.getItem(CHAT_RESPONSE_ID_STORAGE_KEY),
    );
    if (currentStoredResponseId) {
      setPreviousResponseId(currentStoredResponseId);
      const stored = parseStoredMessages(
        window.localStorage.getItem(CHAT_MESSAGES_STORAGE_KEY),
      );
      if (stored?.length) {
        setMessages(stored);
      }
      return;
    }

    const legacyStoredConversationId = normalizeResponseId(
      window.localStorage.getItem(CHAT_LEGACY_CONVERSATION_STORAGE_KEY),
    );
    if (legacyStoredConversationId) {
      window.localStorage.setItem(
        CHAT_RESPONSE_ID_STORAGE_KEY,
        legacyStoredConversationId,
      );
      setPreviousResponseId(legacyStoredConversationId);
    }

    window.localStorage.removeItem(CHAT_LEGACY_CONVERSATION_STORAGE_KEY);
  }, []);

  // Keep localStorage in sync with current conversation so it can be restored on refresh.
  useEffect(() => {
    if (!previousResponseId || messages.length === 0 || isLoading) return;
    try {
      window.localStorage.setItem(
        CHAT_MESSAGES_STORAGE_KEY,
        JSON.stringify(messages),
      );
    } catch {
      // Ignore quota or serialization errors
    }
  }, [previousResponseId, messages, isLoading]);

  const send = async (presetText?: string) => {
    const text = (presetText ?? input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          previousResponseId,
        }),
      });

      const data = (await res.json()) as {
        content?: string;
        error?: string;
        previousResponseId?: string;
        conversationId?: string;
      };

      if (!res.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      const nextResponseId = normalizeResponseId(
        data.previousResponseId ?? data.conversationId,
      );
      if (nextResponseId) {
        window.localStorage.setItem(
          CHAT_RESPONSE_ID_STORAGE_KEY,
          nextResponseId,
        );
        setPreviousResponseId(nextResponseId);
      }

      const assistantId = crypto.randomUUID();
      const assistantText = data.content ?? "No response.";
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content: "",
        },
      ]);
      await typeAssistantMessage(assistantId, assistantText);
    } catch (e) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: e instanceof Error ? e.message : "Something went wrong.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const clearChatHistory = () => {
    setMessages([]);
    setPreviousResponseId(null);
    window.localStorage.removeItem(CHAT_RESPONSE_ID_STORAGE_KEY);
    window.localStorage.removeItem(CHAT_LEGACY_CONVERSATION_STORAGE_KEY);
    window.localStorage.removeItem(CHAT_MESSAGES_STORAGE_KEY);
  };

  return (
    <>
      {/* Floating trigger — bottom right, visible when panel closed */}
      {!isOpen && (
        <button
          ref={triggerRef}
          type="button"
          className="chat-modal__trigger"
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="chat-modal__trigger-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Overlay + panel — bottom right when open */}
      {isOpen && (
        <div
          className="chat-modal__overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Chat"
          data-lenis-prevent
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="chat-modal__panel">
            <header className="chat-modal__header">
              <span className="chat-modal__title">Chat</span>
              <button
                type="button"
                className="chat-modal__close"
                aria-label="Close chat"
                onClick={close}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <div ref={listRef} className="chat-modal__messages">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      m.role === "user"
                        ? "chat-modal__bubble-user"
                        : "chat-modal__bubble-ai"
                    }`}
                  >
                    <p className="chat-modal__message-text whitespace-pre-wrap break-words">
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="chat-modal__message-text chat-modal__bubble-loading rounded-2xl px-4 py-2.5">
                    Thinking…
                  </div>
                </div>
              )}
            </div>

            <div className="chat-modal__composer">
              {previousResponseId && (
                <button
                  type="button"
                  onClick={clearChatHistory}
                  disabled={isLoading}
                  className="chat-modal__clear-btn flex-shrink-0"
                  aria-label="Clear chat history"
                  title="Clear chat history"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    aria-hidden
                  >
                    <path
                      d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 11v6M14 11v6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
              <textarea
                ref={textareaRef}
                id="concierge-chat-input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustHeight();
                }}
                onKeyDown={onKeyDown}
                placeholder="Tell us about your project."
                rows={1}
                className="chat-modal__input flex-1 min-h-[40px] py-2 resize-none overflow-y-auto"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => send()}
                disabled={!input.trim() || isLoading}
                className="chat-modal__send-btn flex-shrink-0"
                aria-label="Send message"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path
                    d="M3 11.5L20.5 4L13 21L11 13.5L3 11.5Z"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
