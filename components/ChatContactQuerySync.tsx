"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { openStartProjectChat } from "@/components/chat-modal";

/** Opens chat when URL contains `?contact=1`, then strips the query (legacy / shared links). */
export function ChatContactQuerySync() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("contact") !== "1") return;
    const timer = window.setTimeout(() => {
      openStartProjectChat();
      router.replace(pathname);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [searchParams, pathname, router]);

  return null;
}
