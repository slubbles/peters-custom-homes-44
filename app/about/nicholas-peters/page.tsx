import type { Metadata } from "next";
import Link from "next/link";
import {
  InnerFold,
  Lede,
  Body,
  H2,
  Kicker,
  Band,
  CloseBand,
} from "@/app/components/Pages";

export const metadata: Metadata = {
  title: "Nicholas Peters | Founder, Peters Custom Homes",
  description:
    "Nicholas Peters, President & CEO of Peters Custom Homes — founder-led luxury custom home building in Charlotte, NC since 2016.",
};

/* ABOUT / NICHOLAS PETERS — dedicated founder page, their exact copy. */

export default function NicholasPetersPage() {
  return (
    <main>
      <InnerFold
        kicker="About Peters Custom Homes"
        h1="Nicholas Peters"
        dek="President & CEO — building homes that define a legacy, one residence at a time."
        photo="/photos/founder-portrait.jpg"
        alt="Nicholas Peters, founder of Peters Custom Homes"
      />

      <Band>
        <Kicker>Our Story</Kicker>
        <H2>A Firm Founded on Purpose</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            ["Since 2016, Peters Custom Homes has built a reputation as one of Charlotte's most respected luxury home builders — a practice organized around a deliberately small calendar and direct founder leadership."]
          </Lede>
          <Body>
            ["Today, Peters Custom Homes is recognized for creating architecturally distinctive residences across the Charlotte region's most coveted neighborhoods.",
            "Unlike production builders or volume developers, our firm operates as a boutique practice. We intentionally limit annual production so founder-level attention is never divided.",
            "For the families we serve, building a home is one of life's most meaningful investments. Our responsibility is to honor that."]
          </Body>
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Leadership</Kicker>
        <H2>Nicholas Peters</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Body>
            ["Nicholas Peters serves as President and Chief Executive Officer of Peters Custom Homes, Inc., where he leads every residence the firm builds.",
            "Known for his hands-on leadership style, Nicholas remains personally involved in every stage of the building process — from the first conversation about how a family lives to the final walkthrough.",
            "Over the course of his career, Nicholas has built a reputation throughout the Charlotte region for transparency, craftsmanship, and disciplined project management.",
            "Clients value not only the homes his team builds, but the clarity and trust he brings to the process."]
          </Body>
          <blockquote
            style={{
              marginTop: 36,
              padding: "26px 0 0",
              borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))",
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: "30ch",
            }}
          >
            {"“"}Exceptional homes cannot be built at scale.{"”"}
          </blockquote>
        </div>
      </Band>

      <Band>
        <Kicker>Our Approach</Kicker>
        <H2>A Boutique Philosophy</H2>
        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "start" }}>
          <div>
            <Body>
              ["At Peters Custom Homes, we believe exceptional homes cannot be built at scale.",
              "Our firm intentionally accepts a limited number of projects each year, allowing our team to devote the necessary attention to every residence."]
            </Body>
            <p style={{ marginTop: 18, fontSize: 16, color: "var(--muted, #6f675c)" }}>
              This approach allows us to maintain the same principles that have defined our work since the beginning:
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
            {[
              "Direct principal involvement",
              "Disciplined construction management",
              "Careful coordination with architects and designers",
              "Uncompromising standards for materials and craftsmanship",
            ].map((v) => (
              <li key={v} style={{ borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))", padding: "18px 4px", fontFamily: "var(--font-display), Georgia, serif", fontSize: 21 }}>
                {v}
              </li>
            ))}
          </ul>
        </div>
        <p style={{ marginTop: 26, fontSize: 16.5, color: "var(--muted, #6f675c)", maxWidth: "70ch" }}>
          The result is a building experience defined not by volume, but by attention and accountability.
        </p>
        <style>{`@media (max-width: 900px){ [data-band-np] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Recognition</Kicker>
        <H2>A Reputation Built on Trust</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Body>
            ["The strength of Peters Custom Homes is reflected in the relationships we maintain with our clients and professional partners.",
            "Our BBB A+ rating, a 4.9-star reputation across more than seventy verified reviews, and BuildZoom recognition among the top 1% of North Carolina contractors document that record.",
            "But the recognition we value most comes from the families who return to us for future projects and recommend us to their neighbors."]
          </Body>
        </div>
      </Band>

      <Band>
        <Kicker>Aligned Practices</Kicker>
        <H2>A Collaborative Platform</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Body>
            ["Many of our projects are shaped through close collaboration with architects, designers, and trusted partners across the region.",
            "Nicholas Peters also leads Peters & Associates, a luxury real estate advisory firm serving families relocating to or within the Charlotte region.",
            "Interior design for many residences is developed in collaboration with Emerald & Oak Design Studio, the studio founded by Miriam Peters.",
            "Together, these aligned relationships allow complex residential estates to be guided from concept through completion under one coordinated platform."]
          </Body>
          <div style={{ marginTop: 30, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href="/partners" style={{ color: "var(--fg)", fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5 }}>
              People & Companies We Work With
            </Link>
            <Link href="/design" style={{ color: "var(--fg)", fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5 }}>
              Interior Design
            </Link>
          </div>
        </div>
      </Band>

      <Band bg="#23261e" pad="var(--pad, 96px)">
        <Kicker dark>Looking Forward</Kicker>
        <div style={{ maxWidth: 900 }}>
          <p style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 32, lineHeight: 1.35, color: "#f4efe6", margin: 0, maxWidth: "40ch" }}>
            {"“"}The homes we build today will become part of the Charlotte region’s architectural landscape for decades to come.{"”"}
          </p>
          <Body>
            ["Our responsibility is to ensure that each one reflects thoughtful planning, disciplined construction, and an authentic respect for the families who will live there.",
            "At Peters Custom Homes, our goal is simple: to build residences that endure — both structurally and in the lives of the families who call them home."]
          </Body>
        </div>
      </Band>

      <CloseBand
        title="Request a Private Consultation with Nicholas Peters"
        note="A confidential conversation with the founder — to understand your vision, evaluate your homesite, and determine whether your project aligns with the eight to ten private residences Peters Custom Homes will undertake this year."
        photo="/photos/living-fireplace.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-band-np] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </main>
  );
}
