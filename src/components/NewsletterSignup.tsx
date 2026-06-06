"use client";

import React, { useState } from "react";
import { subscribeNewsletter } from "@/lib/api";

type Props = {
  source: string;
  variant?: "footer" | "inline";
  titleMain?: string;
  titleHighlight?: string;
  description?: string;
};

export function NewsletterSignup({
  source,
  variant = "inline",
  titleMain = "Stay Ahead of the",
  titleHighlight = "Market",
  description = "Join our newsletter for fabric trends, technical reports, and B2B updates.",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("loading");
    setMessage("");
    try {
      const data = await subscribeNewsletter(trimmed, source);
      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Could not subscribe.");
    }
  };

  if (variant === "footer") {
    return (
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Newsletter</h4>
        <p className="text-sm text-primary/50 leading-relaxed">{description}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-secondary transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-secondary text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all disabled:opacity-60"
          >
            {status === "loading" ? "Joining…" : "Subscribe"}
          </button>
        </form>
        {message && (
          <p className={`text-xs ${status === "error" ? "text-red-300" : "text-secondary"}`} role="status">
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-12 p-16 bg-accent rounded-[4rem] text-center relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h3 className="text-4xl font-serif text-white">
          {titleMain} <span className="text-secondary">{titleHighlight}</span>
        </h3>
        <p className="text-white/50">{description}</p>
        <form
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Professional Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-accent transition-all w-full sm:w-auto disabled:opacity-60"
          >
            {status === "loading" ? "Joining…" : "Join"}
          </button>
        </form>
        {message && (
          <p
            className={`text-sm ${status === "error" ? "text-red-300" : "text-secondary"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
