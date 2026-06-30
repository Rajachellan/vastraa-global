import type { Metadata } from "next";
import { BlogPostView } from "./BlogPostView";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://api.vastraaglobal.com/api";
const SITE_ORIGIN = "https://vastraaglobal.com";

async function fetchBlog(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/blogs/slug/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);
  if (!blog || blog.status === "draft") {
    return { title: "Article | Vastraa Global" };
  }

  const title = blog.seo?.metaTitle || blog.title;
  const description = blog.seo?.metaDescription || blog.excerpt || "";
  const canonical =
    blog.seo?.canonical || `${SITE_ORIGIN}/blogs/${blog.slug}`;
  const images = blog.image ? [blog.image] : [];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  const post =
    blog && blog.status !== "draft"
      ? {
          ...blog,
          image: blog.image || undefined,
        }
      : null;

  return (
    <BlogPostView
      post={post}
      loading={false}
      notFound={!post}
    />
  );
}
