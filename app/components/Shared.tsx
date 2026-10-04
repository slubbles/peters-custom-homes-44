"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

/* SHARED — band headers, the lead form (POST /api/submit), and the close CTA.
   One olive accent throughout. Form email/phone is never shown on the page. */

export function SectionHead({
  kicker,
  title,
  lede,
  href,
  dark = false,
}: {
  kicker: string;
  title: string;
  lede?: string;
  href?: { label: string; to: string };
  dark?: boolean;
}) {
  const ink = dark ? "#f4efe6" : "var(--fg, #1c1916)";
  const muted = dark ? "rgba(244,239,230,0.66)" : "var(--muted, #6f675c)";
  return (
    <div style={{ maxWidth: 920 }}>
      <div className="eyebrow" style={{ color: muted, marginBottom: 20 }}>
        {kicker}
      </div>
      <h2
        style={{
          fontSize: 40,
          fontFamily: "var(--font-display), Georgia, serif",
          fontWeight: 400,
          lineHeight: 1.12,
          margin: 0,
          color: ink,
          maxWidth: "24ch",
        }}
      >
        {title}
      </h2>
      {lede ? (
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: muted, maxWidth: "70ch" }}>
          {lede}
        </p>
      ) : null}
      {href ? (
        <div style={{ marginTop: 22 }}>
          <Link
            href={href.to}
            style={{
              color: ink,
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid var(--brass, #A8894A)",
              paddingBottom: 5,
            }}
          >
            {href.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function Inquiry({ source, heading }: { source: string; heading: string }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, source }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const field = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
    padding: "12px 2px",
    fontSize: 16,
    fontFamily: "var(--font-body), Inter, sans-serif",
    color: "var(--fg, #1c1916)",
    outline: "none",
  } as const;

  return (
    <form
      onSubmit={submit}
      style={{ border: "1px solid var(--hairline, rgba(28,25,22,0.14))", padding: "40px 36px", background: "rgba(255,255,255,0.35)" }}
    >
      <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 24, lineHeight: 1.25 }}>
        {heading}
      </div>
      {state === "sent" ? (
        <p style={{ marginTop: 20, fontSize: 16, color: "var(--accent, #6B7040)" }}>
          Thank you — your inquiry has been received. Nicholas Peters reviews every inquiry
          personally and typically responds within one business day.
        </p>
      ) : (
        <>
          <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
            <input
              required
              aria-label="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={field}
            />
            <textarea
              required
              aria-label="Message"
              placeholder="Tell us about your homesite, your vision, and your timeline"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...field, resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
            className="pill"
            disabled={state === "sending"}
            style={{
              marginTop: 26,
              background: "var(--accent, #6B7040)",
              color: "#f4efe6",
              border: "none",
              cursor: state === "sending" ? "wait" : "pointer",
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {state === "sending" ? "Sending…" : "Send Inquiry"}
          </button>
          {state === "error" ? (
            <p style={{ marginTop: 14, fontSize: 14, color: "#8a4b2d" }}>
              Something went wrong — please try again, or call the office at 980-414-4194.
            </p>
          ) : (
            <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--muted, #6f675c)" }}>
              Submit an inquiry or call the office at 980-414-4194. Nicholas Peters reviews every
              inquiry personally and typically responds within one business day.
            </p>
          )}
        </>
      )}
    </form>
  );
}

export function CtaBand({
  kicker,
  title,
  note,
  to = "/contact",
  label = "Request a Private Consultation",
  photo,
}: {
  kicker: string;
  title: string;
  note?: string;
  to?: string;
  label?: string;
  photo?: string;
}) {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {photo ? (
        <>
          <img
            src={photo}
            alt=""
            className="photo"
            style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(28,25,22,0.72)" }} />
        </>
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "#23261e" }} />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "var(--pad, 96px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="eyebrow" style={{ color: "rgba(244,239,230,0.6)", marginBottom: 20 }}>
          {kicker}
        </div>
        <h2
          style={{
            fontSize: 44,
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#f4efe6",
            margin: 0,
            maxWidth: "22ch",
          }}
        >
          {title}
        </h2>
        {note ? (
          <p style={{ marginTop: 16, fontSize: 16, color: "rgba(244,239,230,0.72)", maxWidth: "56ch" }}>
            {note}
          </p>
        ) : null}
        <div style={{ marginTop: 32, display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <Link
            href={to}
            className="pill"
            style={{
              background: "var(--accent, #6B7040)",
              color: "#f4efe6",
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {label}
          </Link>
          <a
            href="tel:+19804144194"
            style={{
              color: "#f4efe6",
              textDecoration: "none",
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 14,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(244,239,230,0.4)",
              paddingBottom: 4,
            }}
          >
            980-414-4194
          </a>
        </div>
      </div>
    </section>
  );
}

export function TwoUp({ a, b }: { a: ReactNode; b: ReactNode }) {
  return (
    <section style={{ padding: "var(--pad, 96px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "start" }}>
        <div>{a}</div>
        <div>{b}</div>
      </div>
      <style>{`@media (max-width: 900px){ [data-two-up] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
