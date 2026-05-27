"use client";

import { sanitizeBlogHtml } from "@/lib/sanitizeHtml";

type BlogContentProps = {
  html: string;
  className?: string;
};

export function BlogContent({ html, className = "" }: BlogContentProps) {
  const safeHtml = sanitizeBlogHtml(html);

  if (!safeHtml) {
    return null;
  }

  return (
    <div
      className={`blog-prose ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
