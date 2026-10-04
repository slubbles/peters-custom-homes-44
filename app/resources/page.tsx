import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, H2, H3, Kicker, Band, CloseBand } from "@/app/components/Pages";
import { RESOURCE_GROUPS, JOURNAL_INDEX } from "@/lib/journal-data";

/* RESOURCES — their guide index, grouped as they group it. Links resolve to real routes. */

export const metadata: Metadata = {
  title: "Resources | Peters Custom Homes Charlotte NC",
  description:
    "Over 100 expert guides covering every aspect of building a luxury custom home in Charlotte — neighborhoods, costs, process, architecture, and estate features.",
};

export default function ResourcesPage() {
  const journalGuides = JOURNAL_INDEX.slice(0, 12);
  return (
    <main>
      <InnerFold
        kicker="Resources"
        h1="Custom Home Building Resources"
        dek="Every guide, neighborhood profile, comparison, and editorial in one place — written from the jobsite."
        photo="/photos/about-study.jpg"
        alt="Study interior of a Peters Custom Homes estate"
      />

      <Band>
        <Kicker>Library Guides</Kicker>
        <H2>Guides by Topic</H2>
        <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, color: "var(--muted, #6f675c)", maxWidth: "70ch" }}>
          Over 100 expert guides covering every aspect of building a luxury custom home in Charlotte, organized the way we think about the work.
        </p>
        <div
          style={{
            marginTop: 36,
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            backgroundColor: "var(--hairline, rgba(28,25,22,0.14))",
          }}
        >
          {RESOURCE_GROUPS.map((g) => (
            <div key={g.title} style={{ background: "var(--bg, #f4efe6)", padding: "30px 28px 34px" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                {g.title}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 11 }}>
                {g.links.slice(0, 12).map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{
                        color: "var(--fg)",
                        textDecoration: "none",
                        fontSize: 15.5,
                        lineHeight: 1.45,
                        borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                        paddingBottom: 3,
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {g.links.length > 12 ? (
                <div className="eyebrow" style={{ marginTop: 14 }}>
                  + {g.links.length - 12} more guides
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Journal & Editorial</Kicker>
        <H2>Recent Writing</H2>
        <div style={{ marginTop: 30, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
          {journalGuides.map((j) => (
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
              <div className="eyebrow" style={{ whiteSpace: "nowrap" }}>{j.section}</div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 30 }}>
          <Link
            href="/journal"
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
            Read the Full Journal
          </Link>
        </div>
      </Band>

      <CloseBand
        kicker="Begin Your Estate Vision"
        title="Prefer to Just Ask?"
        note="Nicholas Peters answers every inquiry personally — a guide is a start; a conversation is better."
        photo="/photos/living-fireplace.jpg"
      />
    </main>
  );
}
