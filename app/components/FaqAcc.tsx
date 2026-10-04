"use client";

import { useState } from "react";

/* FAQ accordion — hairline rows, serif question, olive plus marker. */

export default function FaqAcc({
  items,
  startOpen = 0,
}: {
  items: { q: string; a: string }[];
  startOpen?: number;
}) {
  const [open, setOpen] = useState<number>(startOpen);
  return (
    <div
      style={{
        borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))",
      }}
    >
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 24,
                padding: "22px 4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 21,
                lineHeight: 1.35,
                color: "var(--fg, #1c1916)",
              }}
            >
              <span>{it.q}</span>
              <span
                style={{
                  color: "var(--accent, #6B7040)",
                  fontSize: 22,
                  fontWeight: 400,
                  flexShrink: 0,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .2s",
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p
                style={{
                  margin: "0 0 24px",
                  maxWidth: "70ch",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--muted, #6f675c)",
                }}
              >
                {it.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
