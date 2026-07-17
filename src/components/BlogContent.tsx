"use client";

import { useEffect, useState } from "react";

const BLOG_ALLOWED_TAGS = [
  "p", "br", "strong", "b", "em", "i", "u", "s", "del",
  "h1", "h2", "h3", "h4", "ul", "ol", "li", "blockquote",
  "a", "img", "table", "thead", "tbody", "tr", "th", "td",
  "hr", "pre", "code", "span", "div",
];

const BLOG_ALLOWED_ATTR = [
  "href", "src", "alt", "title", "class", "style", "target", "rel",
  "colspan", "rowspan", "width", "height", "align", "data-width",
];

type BlogContentProps = {
  html: string;
  className?: string;
};

export function BlogContent({ html, className = "" }: BlogContentProps) {
  const [safeHtml, setSafeHtml] = useState("");

  useEffect(() => {
    if (!html) {
      setSafeHtml("");
      return;
    }

    import("dompurify").then((mod) => {
      const clean = mod.default.sanitize(html, {
        ALLOWED_TAGS: BLOG_ALLOWED_TAGS,
        ALLOWED_ATTR: BLOG_ALLOWED_ATTR,
        ALLOW_DATA_ATTR: false,
      });
      setSafeHtml(clean);
    });
  }, [html]);

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
