import Link from "next/link";
import FaqAcc from "./FaqAcc";
import { CtaBand } from "./Shared";

/* PAGES — shared inner-page building blocks (server components except FAQ).
   Type/pad/photo budget equals the homepage (CRAFT.md). */

export function InnerFold({
  h1,
  dek,
  photo,
  alt,
  kicker,
  pad,
}: {
  h1: string;
  dek?: string;
  photo: string;
  alt?: string;
  kicker?: string;
  pad?: string;
}) {
  return (
    <section
      className="inner-fold"
      data-inner-fold
      style={{
        minHeight: "70vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={photo}
        alt={alt || ""}
        className="photo"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: pad || "var(--pad, 96px)",
        }}
      >
        <div
          style={{
            background: "rgba(28, 25, 22, 0.8)",
            color: "#f4efe6",
            padding: "44px 52px",
            maxWidth: 780,
          }}
        >
          {kicker ? (
            <div className="eyebrow" style={{ color: "rgba(244,239,230,0.6)", marginBottom: 18 }}>
              {kicker}
            </div>
          ) : null}
          <h1
            style={{
              fontSize: 56,
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
              margin: 0,
              color: "#f4efe6",
              maxWidth: "20ch",
            }}
          >
            {h1}
          </h1>
          {dek ? (
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(244,239,230,0.78)",
                maxWidth: "56ch",
                margin: "16px 0 0",
              }}
            >
              {dek}
            </p>
          ) : null}
        </div>
      </div>
      <style>{`@media (max-width: 900px){
        [data-inner-fold] { padding: 0 !important; }
        [data-inner-fold] > div { padding: 24px 20px 40px !important; }
        [data-inner-fold] > div > div { padding: 30px 24px !important; }
        [data-inner-fold] h1 { font-size: 38px !important; }
      }`}</style>
    </section>
  );
}

/* Body copy: one idea per band, 70ch, their exact words. */

export function Lede({ children }: { children: string | string[] }) {
  const arr = Array.isArray(children) ? children : [children];
  return (
    <div>
      {arr.map((t, i) => (
        <p
          key={i}
          style={{
            fontSize: 19,
            lineHeight: 1.65,
            maxWidth: "70ch",
            marginTop: i === 0 ? 0 : 16,
          }}
        >
          {t}
        </p>
      ))}
    </div>
  );
}

export function Body({ children }: { children: string | string[] }) {
  const arr = Array.isArray(children) ? children : [children];
  return (
    <div>
      {arr.map((t, i) => (
        <p
          key={i}
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--muted, #6f675c)",
            maxWidth: "70ch",
            marginTop: i === 0 ? 0 : 16,
          }}
        >
          {t}
        </p>
      ))}
    </div>
  );
}

export function H2({ children, id }: { children: string; id?: string }) {
  return (
    <h2
      id={id}
      style={{
        fontSize: 40,
        fontFamily: "var(--font-display), Georgia, serif",
        fontWeight: 400,
        lineHeight: 1.12,
        margin: 0,
        maxWidth: "24ch",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: string }) {
  return (
    <h3
      style={{
        fontSize: 24,
        fontFamily: "var(--font-display), Georgia, serif",
        fontWeight: 400,
        lineHeight: 1.3,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
}

export function Band({
  children,
  bg,
  id,
  pad,
}: {
  children: React.ReactNode;
  bg?: string;
  id?: string;
  pad?: string;
}) {
  return (
    <section
      id={id}
      style={{ background: bg, padding: pad || "var(--pad, 96px)" }}
    >
      {children}
    </section>
  );
}

export function Kicker({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="eyebrow" style={{ color: dark ? "rgba(244,239,230,0.55)" : undefined, marginBottom: 20 }}>
      {children}
    </div>
  );
}

export function StatRow({
  items,
  dark = false,
}: {
  items: { n: string; label: string; note?: string }[];
  dark?: boolean;
}) {
  const ink = dark ? "#f4efe6" : "var(--fg, #1c1916)";
  const muted = dark ? "rgba(244,239,230,0.6)" : "var(--muted, #6f675c)";
  return (
    <div
      style={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        backgroundColor: dark ? "rgba(244,239,230,0.16)" : "var(--hairline, rgba(28,25,22,0.14))",
      }}
    >
      {items.map((s, i) => (
        <div
          key={i}
          style={{
            backgroundColor: dark ? "#23261e" : "var(--bg, #f4efe6)",
            padding: "30px 26px 34px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 40,
              lineHeight: 1.1,
              color: ink,
            }}
          >
            {s.n}
          </div>
          <div className="eyebrow" style={{ color: muted, marginTop: 10 }}>
            {s.label}
          </div>
          {s.note ? (
            <p style={{ fontSize: 14, lineHeight: 1.6, color: muted, marginTop: 10 }}>{s.note}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/* Large named photograph rows — never a thumbnail card kit. */

export function PhotoRow({
  items,
  cols = 3,
  ratio = 420,
  altPrefix,
}: {
  items: { name: string; dek?: string; href: string; photo: string; kicker?: string }[];
  cols?: 2 | 3 | 4;
  ratio?: number;
  altPrefix?: string;
}) {
  const min = cols === 2 ? 420 : cols === 4 ? 250 : 300;
  return (
    <div
      style={{
        marginTop: 48,
        display: "grid",
        gap: 24,
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
      }}
    >
      {items.map((w) => (
        <Link key={w.name + w.href} href={w.href} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
          <div style={{ height: ratio, overflow: "hidden", backgroundColor: "#e5ded2" }}>
            <img
              src={w.photo}
              alt={altPrefix ? `${altPrefix} — ${w.name}` : w.name}
              className="photo"
            />
          </div>
          {w.kicker ? (
            <div className="eyebrow" style={{ marginTop: 16, marginBottom: 6 }}>
              {w.kicker}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 25,
              lineHeight: 1.18,
              marginTop: w.kicker ? 0 : 16,
            }}
          >
            {w.name}
          </div>
          {w.dek ? (
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted, #6f675c)", marginTop: 8, maxWidth: "44ch" }}>
              {w.dek}
            </p>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

/* Editorial index list — hairline rows with big serif names (Casa journal grammar). */

export function IndexList({
  items,
  dark = false,
  right,
}: {
  items: { name: string; dek?: string; href: string; meta?: string }[];
  dark?: boolean;
  right?: boolean;
}) {
  const ink = dark ? "#f4efe6" : "var(--fg, #1c1916)";
  const muted = dark ? "rgba(244,239,230,0.6)" : "var(--muted, #6f675c)";
  const line = dark ? "rgba(244,239,230,0.18)" : "var(--hairline, rgba(28,25,22,0.14))";
  return (
    <div style={{ marginTop: 40, borderTop: `1px solid ${line}` }}>
      {items.map((it, i) => (
        <Link
          key={it.href + i}
          href={it.href}
          style={{
            display: "grid",
            gridTemplateColumns: right ? "minmax(0,1fr) auto" : "minmax(0,1fr)",
            gap: 24,
            alignItems: "baseline",
            borderBottom: `1px solid ${line}`,
            padding: "26px 4px",
            textDecoration: "none",
            color: ink,
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 24, lineHeight: 1.25 }}>
              {it.name}
            </div>
            {it.dek ? (
              <div style={{ fontSize: 15, color: muted, marginTop: 6, maxWidth: "64ch" }}>{it.dek}</div>
            ) : null}
          </div>
          {right && it.meta ? (
            <div className="eyebrow" style={{ color: muted, whiteSpace: "nowrap" }}>
              {it.meta}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

export function LinkGrid({
  groups,
  dark = false,
}: {
  groups: { title: string; links: { href: string; label: string; dek?: string }[] }[];
  dark?: boolean;
}) {
  const ink = dark ? "#f4efe6" : "var(--fg, #1c1916)";
  const muted = dark ? "rgba(244,239,230,0.62)" : "var(--muted, #6f675c)";
  const line = dark ? "rgba(244,239,230,0.18)" : "var(--hairline, rgba(28,25,22,0.14))";
  return (
    <div
      style={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        backgroundColor: line,
        border: `1px solid ${line}`,
        marginTop: 24,
      }}
    >
      {groups.map((g) => (
        <div key={g.title} style={{ backgroundColor: dark ? "#23261e" : "var(--bg, #f4efe6)", padding: "30px 28px 34px" }}>
          <div className="eyebrow" style={{ color: muted, marginBottom: 16 }}>
            {g.title}
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 11 }}>
            {g.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: ink, textDecoration: "none", fontSize: 15.5, borderBottom: `1px solid ${dark ? "rgba(244,239,230,0.25)" : "var(--hairline, rgba(28,25,22,0.14))"}`, paddingBottom: 3 }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function FaqSection({ heading, items, bg }: { heading: string; items: { q: string; a: string }[]; bg?: string }) {
  return (
    <section style={{ background: bg, padding: "var(--pad, 96px)" }}>
      <Kicker>Frequently Asked Questions</Kicker>
      <H2>{heading}</H2>
      <div style={{ marginTop: 36, maxWidth: 980 }}>
        <FaqAcc items={items} />
      </div>
    </section>
  );
}

export function CloseBand({
  title,
  note,
  photo,
  to = "/contact",
  label = "Request a Private Consultation",
  kicker = "Begin Your Estate Vision",
}: {
  title: string;
  note?: string;
  photo?: string;
  to?: string;
  label?: string;
  kicker?: string;
}) {
  return <CtaBand kicker={kicker} title={title} note={note} to={to} label={label} photo={photo} />;
}

export function DisclosureNote({ children }: { children: string }) {
  return (
    <p
      style={{
        fontSize: 13.5,
        lineHeight: 1.65,
        color: "var(--muted, #6f675c)",
        maxWidth: "78ch",
        paddingTop: 18,
      }}
    >
      {children}
    </p>
  );
}

export function QuoteBand({
  quote,
  who,
  role,
  bg,
}: {
  quote: string;
  who: string;
  role?: string;
  bg?: string;
}) {
  return (
    <section style={{ background: bg || "#ece5d8", padding: "var(--pad, 96px)" }}>
      <div style={{ maxWidth: 900 }}>
        <div style={{ color: "var(--brass, #A8894A)", fontSize: 18, letterSpacing: "0.24em" }}>★★★★★</div>
        <blockquote
          style={{
            margin: "24px 0 0",
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: "44ch",
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="eyebrow" style={{ marginTop: 24 }}>
          {who}
          {role ? ` · ${role}` : ""}
        </figcaption>
      </div>
    </section>
  );
}
