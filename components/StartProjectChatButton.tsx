"use client";

import { openStartProjectChat } from "@/components/chat-modal";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function StartProjectChatButton({
  className,
  children = "Start a project",
}: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openStartProjectChat()}
    >
      {children}
    </button>
  );
}
