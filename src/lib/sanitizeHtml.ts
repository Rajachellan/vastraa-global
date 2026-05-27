import DOMPurify from "isomorphic-dompurify";

const BLOG_ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "del",
  "h1",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "blockquote",
  "a",
  "img",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "hr",
  "pre",
  "code",
  "span",
  "div",
];

const BLOG_ALLOWED_ATTR = [
  "href",
  "src",
  "alt",
  "title",
  "class",
  "style",
  "target",
  "rel",
  "colspan",
  "rowspan",
  "width",
  "height",
  "align",
];

/** Sanitize blog HTML from TipTap before rendering on the public site. */
export function sanitizeBlogHtml(html: string): string {
  if (!html) return "";

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: BLOG_ALLOWED_TAGS,
    ALLOWED_ATTR: BLOG_ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
  });
}
