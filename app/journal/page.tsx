import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, H2, H3, Kicker, Band } from "@/app/components/Pages";
import { SectionHead, CtaBand } from "@/app/components/Shared";
import { JOURNAL_INDEX, FEATURED } from "@/lib/journal-data";

/* JOURNAL INDEX — dated editorial list from their structured data (no lorem cards). */

export const metadata: Metadata = {
  title: "Journal | Peters Custom Homes Charlotte NC",
  description:
    "Guides, market outlooks, and craft essays from Peters Custom Homes — notes on building luxury custom homes across Charlotte, from Myers Park to Lake Norman.",
};

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function JournalPage() {
  const bySection = new Map<string, typeof JOURNAL_INDEX>();
  for (const j of JOURNAL_INDEX) {
    const arr = bySection.get(j.section) || [];
    arr.push(j);
    bySection.set(j.section, arr);
  }
  const sections = [...bySection.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <main>
      <InnerFold
        kicker="Journal"
        h1="Notes on Building Well"
        dek="Guides, market outlooks, and craft essays from a decade of building Charlotte's most exacting homes."
        photo="/photos/coffered-ceiling.jpg"
        alt="Coffered ceiling detail in a Peters Custom Homes estate"
      />

      <Band bg="#ece5d8">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "start" }}>
          <div>
            <Kicker>Editors&rsquo; Picks</Kicker>
            <H2>Start Here</H2>
            <div style={{ marginTop: 34, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
              {FEATURED.map((f, i) => (
                <div key={f.headline} style={{ padding: "26px 0", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>0{i + 1}</div>
                  <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 26, lineHeight: 1.25 }}>
                    {f.headline}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted, #6f675c)", marginTop: 8, maxWidth: "52ch" }}>
                    {f.dek}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Kicker>From the Journal</Kicker>
            <H2>Latest Entries</H2>
            <div style={{ marginTop: 34, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
              {JOURNAL_INDEX.slice(0, 8).map((j) => (
                <Link
                  key={j.url}
                  href={j.url}
                  style={{
                    display: "block",
                    padding: "22px 0",
                    borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                    <div className="eyebrow" style={{ whiteSpace: "nowrap" }}>{fmt(j.date)}</div>
                    <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 21, lineHeight: 1.3 }}>
                      {j.headline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 26 }}>
              <Link
                href="#all-entries"
                style={{
                  color: "var(--fg)",
                  fontSize: 13,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: "1px solid var(--brass, #A8894A)",
                  paddingBottom: 5,
                }}
              >
                Browse All {JOURNAL_INDEX.length} Entries
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-journal-cols] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </Band>

      <Band>
        <Kicker>Every Entry</Kicker>
        <H2>The Full Journal</H2>
        <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, color: "var(--muted, #6f675c)", maxWidth: "70ch" }}>
          Every article we have published, grouped by theme — dated, and written from the jobsite.
        </p>
        <div id="all-entries" style={{ marginTop: 12 }}>
          {sections.map(([name, items]) => (
            <div key={name} style={{ marginTop: 56 }}>
              <H3>{name}</H3>
              <div style={{ marginTop: 20, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                {items.map((j) => (
                  <Link
                    key={j.url}
                    href={j.url}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0,1fr) auto",
                      gap: 24,
                      alignItems: "baseline",
                      borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                      padding: "20px 4px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 21, lineHeight: 1.3 }}>
                        {j.headline}
                      </div>
                      <div style={{ fontSize: 14.5, color: "var(--muted, #6f675c)", marginTop: 5, maxWidth: "64ch" }}>
                        {j.dek}
                      </div>
                    </div>
                    <div className="eyebrow" style={{ whiteSpace: "nowrap" }}>{fmt(j.date)}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand
        kicker="Begin Your Estate Vision"
        title="Have a Question the Journal Doesn't Answer?"
        note="Nicholas Peters answers every inquiry personally — ask directly."
        photo="/photos/living-fireplace.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-journal-cols] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </main>
  );
}
