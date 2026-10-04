import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGES } from "@/lib/gen-pages";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, PhotoRow, FaqSection, CloseBand } from "@/app/components/Pages";

/* LEFTOVER GENERIC URLS — [.. slug] catch-all for the 592 long-tail detail routes.
   Core IA (about / team / contact / buy / sell / communities / portfolio / process) are dedicated page.tsx files;
   nothing core is served from here. Content is Peters Custom Homes' own copy, verbatim. */

export function generateStaticParams() {
  return PAGES.map((p) => {
    const parts = p.path.replace(/^\//, "").split("/");
    return { slug: parts };
  });
}

function findPage(slug: string[]) {
  const path = "/" + slug.join("/");
  return PAGES.find((p) => p.path === path);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findPage(slug);
  if (!p) return { title: "Peters Custom Homes | Charlotte NC" };
  return { title: p.title, description: p.desc };
}

/* Groups a flat sec stream into bands: kicker (cap) starts a band; body items follow. */
function toBands(secs: { kind: string; text: string; cap?: boolean }[]) {
  const bands: { kicker: string | null; items: typeof secs }[] = [];
  let cur: { kicker: string | null; items: any[] } = { kicker: null, items: [] };
  for (const s of secs) {
    if (s.cap) {
      if (cur.items.length) bands.push(cur);
      cur = { kicker: s.text, items: [] };
    } else {
      cur.items.push(s);
    }
  }
  if (cur.items.length) bands.push(cur);
  return bands;
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const p = findPage(slug);
  if (!p) notFound();

  const bands = toBands(
    p.secs.filter(
      (s) =>
        !(s.kind === "p" && s.text === "This page has moved.") &&
        !(s.kind === "h3" && s.text === "CONTINUE EXPLORING")
    )
  );
  // drop the duplicated QUICK ANSWER lead from the body stream (rendered separately)
  if (p.lead) {
    const leadH = p.lead.h;
    const leadA = p.lead.a;
    for (const b of bands) {
      b.items = b.items.filter((s) => !(s.kind === "h2" && s.text === leadH) && !(s.kind === "p" && s.text === leadA));
    }
  }

  const isConsolidated = Boolean((p as { consolidated?: boolean }).consolidated);
  const title = isConsolidated ? p.h1 : `${p.h1} | Peters Custom Homes`;
  const note = isConsolidated
    ? p.desc || "A founder-led Charlotte custom home builder — 8–10 private residences a year."
    : p.desc;

  return (
    <main>
      <InnerFold
        kicker="Peters Custom Homes · Charlotte, North Carolina"
        h1={p.h1}
        dek={isConsolidated ? p.desc || undefined : undefined}
        photo={p.photo || "/photos/living-fireplace.jpg"}
        alt={`${p.h1} — Peters Custom Homes, Charlotte NC`}
      />

      {p.lead ? (
        <Band bg="#ece5d8">
          <div style={{ maxWidth: 980, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)", gap: 64, alignItems: "start" }}>
            <div>
              <Kicker>Quick Answer</Kicker>
              <H2>{p.lead.h}</H2>
              {p.updated ? <div className="eyebrow" style={{ marginTop: 18 }}>{p.updated}</div> : null}
            </div>
            <Lede>{p.lead.a}</Lede>
          </div>
          <style>{`@media (max-width: 900px){ [data-qa-cols] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
        </Band>
      ) : p.updated ? (
        <Band>
          <div className="eyebrow">{p.updated}</div>
        </Band>
      ) : null}

      {bands.map((b, bi) => {
        const paras = b.items.filter((s) => s.kind === "p");
        const lists = b.items.filter((s) => s.kind === "li");
        const heads = b.items.filter((s) => s.kind === "h2" || s.kind === "h3");
        const tone = bi % 2 === 1 ? "#ece5d8" : undefined;
        return (
          <Band key={bi} bg={tone}>
            {b.kicker ? <Kicker>{b.kicker}</Kicker> : null}
            {heads.map((h, i) =>
              h.kind === "h2" ? (
                <div key={`h${i}`} style={i === 0 ? {} : { marginTop: 48 }}><H2>{h.text}</H2></div>
              ) : (
                <div key={`h${i}`} style={{ marginTop: 36 }}><H3>{h.text}</H3></div>
              )
            )}
            {paras.length ? (
              <div style={{ marginTop: heads.length ? 26 : 8 }}>
                <Body>{paras.map((s) => s.text)}</Body>
              </div>
            ) : null}
            {lists.length ? (
              <div style={{ marginTop: 26, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                {lists.map((s, i) => (
                  <div key={`l${i}`} style={{ display: "flex", gap: 14, padding: "12px 4px", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))", alignItems: "baseline" }}>
                    <span style={{ color: "var(--brass, #A8894A)" }}>·</span>
                    <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--muted, #6f675c)", maxWidth: "66ch", margin: 0 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </Band>
        );
      })}

      {p.faq.length ? <FaqSection heading="Frequently Asked Questions" items={p.faq} /> : null}

      {p.related.length ? (
        <Band bg="#ece5d8">
          <Kicker>Continue Exploring</Kicker>
          <H2>Related Reading</H2>
          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2, backgroundColor: "var(--hairline, rgba(28,25,22,0.14))" }}>
            {p.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  background: "var(--bg, #f4efe6)",
                  padding: "28px 30px 32px",
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 23, lineHeight: 1.28 }}>
                  {r.label}
                </div>
                <div style={{ marginTop: 14, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, color: "var(--fg)", borderBottom: "1px solid var(--brass, #A8894A)", display: "inline-block", paddingBottom: 4 }}>
                  Read the Guide
                </div>
              </Link>
            ))}
          </div>
        </Band>
      ) : null}

      <CloseBand
        kicker={isConsolidated ? "Peters Custom Homes" : "Begin Your Estate Vision"}
        title="Speak With Nicholas Peters"
        note={note && note.length > 8 ? note : "A confidential conversation about your homesite, your vision, and your timeline."}
        photo={p.photo || "/photos/living-fireplace.jpg"}
      />

      <style>{`@media (max-width: 900px){ [data-qa-cols] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </main>
  );
}
