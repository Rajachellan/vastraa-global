"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { FabricLandingPage } from "@/components/FabricLandingPage";
import { fetchFabricPage } from "@/lib/catalog";
import type { FabricCategory } from "@/lib/types";

type Props = {
  slug: string;
};

export function FabricSlugPage({ slug }: Props) {
  const [page, setPage] = useState<FabricCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchFabricPage(slug).then((data) => {
      if (!cancelled) {
        setPage(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-bg-ivory pt-40 text-center text-accent/40">
        Loading fabric page…
      </main>
    );
  }

  if (!page) notFound();
  return <FabricLandingPage page={page} />;
}
