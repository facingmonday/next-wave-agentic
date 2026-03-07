"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Dispatch when chat modal opens so Lenis can be stopped and modal scroll works */
export const CHAT_MODAL_OPEN_EVENT = "nwa-chat-modal-open";
/** Dispatch when chat modal closes so Lenis can be started again */
export const CHAT_MODAL_CLOSE_EVENT = "nwa-chat-modal-close";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // When chat modal opens, stop Lenis so wheel/touch scroll inside the modal
    // goes to the messages container instead of the page
    const onChatOpen = () => lenis.stop();
    const onChatClose = () => lenis.start();
    window.addEventListener(CHAT_MODAL_OPEN_EVENT, onChatOpen);
    window.addEventListener(CHAT_MODAL_CLOSE_EVENT, onChatClose);

    // Cleanup
    return () => {
      window.removeEventListener(CHAT_MODAL_OPEN_EVENT, onChatOpen);
      window.removeEventListener(CHAT_MODAL_CLOSE_EVENT, onChatClose);
      lenisRef.current = null;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
