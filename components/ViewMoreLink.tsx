"use client";

import Link from "next/link";

type ViewMoreLinkProps = {
  href: string;
  label: string;
  className?: string;
};

const baseClassName =
  "inline-flex w-fit items-center justify-center rounded-full bg-[#4E79A7] px-7 py-3 text-sm font-semibold text-[#CFC8CF] transition-colors hover:bg-[#4E79A7]/90";

export function ViewMoreLink({
  href,
  label,
  className = "",
}: ViewMoreLinkProps) {
  return (
    <Link
      href={href}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      {label}
    </Link>
  );
}
