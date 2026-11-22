"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to a real backend (n8n webhook / Airtable / Notion DB)
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-full border border-accent/40 bg-accent/10 px-6 py-4 text-accent">
        You&apos;re on the list. We&apos;ll ping you at launch. 🚀
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        className="flex-1 rounded-full border border-line bg-card px-5 py-3.5 text-sm outline-none transition focus:border-accent"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black transition hover:brightness-110 active:scale-95"
      >
        Join the waitlist
      </button>
    </form>
  );
}
