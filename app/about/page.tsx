import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, Lede, Body, H2, Kicker, StatRow, Band, PhotoRow, FaqSection, CloseBand, DisclosureNote, QuoteBand, } from "@/app/components/Pages";
import { SectionHead } from "../components/Shared";

export const metadata: Metadata = {
  title: "About | Charlotte Luxury Home Builder Since 2016",
  description:
    "Peters Custom Homes was founded in 2016 to elevate the standard of residential building in Charlotte — a boutique firm building 8-10 private residences a year.",
};

/* ABOUT — dedicated page, their exact copy (blocks 6-106). */

const METHOD = [
  { n: "Vision", p: "Confidential consultation to understand your family's aspirations, lifestyle, and architectural preferences." },
  { n: "Planning", p: "Homesite evaluation, feasibility analysis, and comprehensive scope development." },
  { n: "Design", p: "Collaborative design with architects and designers, with detailed cost modeling throughout." },
  { n: "Construction", p: "Precision construction management with daily principal oversight and transparent communication." },
  { n: "Completion", p: "Comprehensive quality assurance, careful delivery, and ongoing homeowner support." },
];

const VALUES = [
  "Integrity", "Craftsmanship", "Client-Centered Service", "Accountability", "Excellence",
  "Professionalism", "Innovation", "Collaboration", "Attention to Detail", "Long-Term Commitment",
];

const FAQ = [
  { q: "Who founded Peters Custom Homes?", a: "Nicholas Peters founded Peters Custom Homes in 2016 to build architecturally significant residences under direct founder leadership — a deliberate counter to the handoff culture of larger builders." },
  { q: "How many homes does Peters Custom Homes build each year?", a: "We deliberately limit our calendar to 8-10 private residences a year. Volume is the single easiest way to dilute founder involvement, and involvement is the product." },
  { q: "What credentials and recognition does the firm hold?", a: "Peters Custom Homes is a licensed North Carolina general contractor with a BBB A+ rating, a 4.9-star average across 71+ verified reviews, and BuildZoom recognition in the top 1% of North Carolina contractors." },
  { q: "Is Peters Custom Homes a design-build firm?", a: "Yes, in practice. We participate from the first design meeting alongside the architect and our interior architecture partner, so design decisions are validated against real construction costs before they reach the drafting table." },
  { q: "How can I verify your work before engaging the firm?", a: "Review our portfolio of completed residences, read the verified reviews, and request references. We also share documented project history during the first consultation." },
  { q: "How long has Peters Custom Homes been in business?", a: "Peters Custom Homes was founded in 2016 and has served Charlotte-area custom-home clients since then." },
  { q: "What areas does Peters Custom Homes serve?", a: "We build luxury residences throughout the greater Charlotte region including Myers Park, Eastover, Foxcroft, Marvin, Weddington, SouthPark, Ballantyne, and the Lake Norman communities." },
  { q: "What makes Peters Custom Homes different from other Charlotte builders?", a: "We intentionally limit volume to 8-10 estates per year so every family receives the personal involvement of founder Nicholas Peters — from first sketch through final walkthrough." },
];

export default function AboutPage() {
  return (
    <main>
      <InnerFold
        kicker="About the Firm"
        h1="Charlotte's Distinguished Custom Home Builder"
        dek="Founded in 2016 — a boutique builder intentionally limited to eight to ten private residences a year."
        photo="/photos/about-study.jpg"
        alt="Peters Custom Homes estate interior with marble kitchen"
      />

      {/* Mission */}
      <Band>
        <Kicker>Charlotte's Most Distinguished Home Builder</Kicker>
        <div style={{ maxWidth: 980 }}>
          <Lede>
            Peters Custom Homes was founded with a singular mission: to elevate the standard of residential building in the Charlotte region through craftsmanship, integrity, and an uncompromising standard of excellence.
          </Lede>
          <Body>
{["As a boutique luxury home builder in Charlotte, we intentionally limit our annual volume. This deliberate approach ensures that every family we serve receives the attention, communication, and craftsmanship their residence deserves.",
            "Our reputation is built through completed work, documented project experience, and the trust clients place in our team.",
            "From new custom home construction and luxury estate renovations to private client advisory, we guide families through the most meaningful investment they will make outside their family."]}
</Body>
          <blockquote
            style={{
              marginTop: 40,
              padding: "26px 0 0",
              borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))",
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: "34ch",
            }}
          >
            {"“"}Build fewer homes. Build them better.{"”"}
          </blockquote>
        </div>
      </Band>

      {/* Story */}
      <Band bg="#ece5d8">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "start" }}>
          <div>
            <Kicker>Our Story</Kicker>
            <H2>Founded on Principle, Built on Trust</H2>
          </div>
          <Body>
{["Peters Custom Homes was established in 2016 by Nicholas Peters with a conviction that Charlotte deserved a custom home builder organized around a smaller calendar and a higher standard.",
            "From its earliest days, the firm operated on a principle that remains central to its identity: build fewer homes, and give each one the leadership it requires.",
            "This disciplined approach has earned the trust of Charlotte's most discerning families and produced a portfolio of architecturally significant residences.",
            "Today, the firm's reputation is built on a foundation of completed estates that speak for themselves — homes that endure architecturally, structurally, and emotionally."]}
</Body>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-about] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </Band>

      {/* Credentials */}
      <Band>
        <Kicker>Recognition & Credentials</Kicker>
        <H2>Why Families Trust Us</H2>
        <div style={{ marginTop: 44 }}>
          <StatRow
            items={[
              { n: "A+", label: "BBB Rating", note: "Better Business Bureau A+ rated" },
              { n: "4.9★", label: "Client Rating", note: "Across 71+ verified reviews" },
              { n: "Top 1%", label: "NC Contractor", note: "BuildZoom recognition statewide" },
              { n: "8–10", label: "Homes Per Year", note: "Intentional volume for unmatched quality" },
            ]}
          />
        </div>
        <p style={{ marginTop: 26, fontSize: 13.5, color: "var(--muted, #6f675c)" }}>
          Verify our credentials independently — ratings reflect third-party platform data as of the most recent update.
        </p>
      </Band>

      {/* Clients say */}
      <QuoteBand
        quote="Building a custom home can be daunting, but Nicholas and his team made the entire process seamless. The communication was exceptional at every stage."
        who="Eastover Family"
        role="New Construction — Charlotte, NC"
      />

      {/* Method */}
      <Band>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: 64 }}>
          <div>
            <Kicker>Our Approach</Kicker>
            <H2>The Peters Method</H2>
            <Body>
{["Every Peters Custom Homes engagement follows a disciplined five-step process that ensures architectural integrity, financial clarity, and an exceptional finished residence."]}
</Body>
            <Link href="/process" style={{ color: "var(--fg)", fontSize: 14, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5, display: "inline-block", marginTop: 24 }}>
              The Full Process
            </Link>
          </div>
          <div style={{ borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
            {METHOD.map((m, i) => (
              <div key={m.n} style={{ display: "grid", gridTemplateColumns: "64px minmax(0,1fr)", gap: 20, padding: "22px 0", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--brass, #A8894A)", fontSize: 17 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 24 }}>{m.n}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted, #6f675c)", marginTop: 6 }}>{m.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-method] { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
      </Band>

      {/* Values */}
      <Band bg="#23261e" pad="var(--pad, 96px)">
        <Kicker dark>Our Values</Kicker>
        <H2>What We Stand For</H2>
        <div
          style={{
            marginTop: 36,
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            backgroundColor: "rgba(244,239,230,0.16)",
          }}
        >
          {VALUES.map((v) => (
            <div key={v} style={{ backgroundColor: "#23261e", padding: "20px 22px", fontFamily: "var(--font-display), Georgia, serif", fontSize: 20, color: "#f4efe6" }}>
              {v}
            </div>
          ))}
        </div>
      </Band>

      {/* Principals */}
      <Band>
        <Kicker>Leadership</Kicker>
        <H2>The Principals</H2>
        <div style={{ marginTop: 44, display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div style={{ border: "1px solid var(--hairline, rgba(28,25,22,0.14))", padding: "38px 36px" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>President & CEO</div>
            <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 30 }}>Nicholas Peters</div>
            <Body>
{["As President & CEO, Nicholas remains personally involved in every residence from concept through completion. He leads pre-construction planning, budgeting, design coordination, and the daily construction oversight that defines the firm."]}
</Body>
            <p style={{ marginTop: 18, fontSize: 15.5 }}>
              <a href="tel:+17042644572" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>704-264-4572</a>
              {" · "}
              <a href="mailto:npeters@peterscustomhomes.com" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>npeters@peterscustomhomes.com</a>
            </p>
          </div>
          <div style={{ border: "1px solid var(--hairline, rgba(28,25,22,0.14))", padding: "38px 36px" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Co-Owner & Design Director</div>
            <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 30 }}>Miriam Peters</div>
            <Body>
{["As Co-Owner, Design Director, and Founder of Emerald & Oak Design Studio, Miriam leads the interior architecture and material selections that complete every Peters Custom Homes residence."]}
</Body>
            <p style={{ marginTop: 18, fontSize: 15.5 }}>
              <a href="tel:+17042644080" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>704-264-4080</a>
              {" · "}
              <a href="mailto:mpeters@peterscustomhomes.com" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>mpeters@peterscustomhomes.com</a>
            </p>
          </div>
        </div>
      </Band>

      {/* Recent work strip */}
      <Band bg="#ece5d8">
        <SectionHead
          kicker="Recent Projects"
          title="Recent Custom Homes Built in Charlotte, NC"
          href={{ label: "View the Portfolio", to: "/portfolio" }}
        />
        <PhotoRow
          cols={3}
          items={[
            { name: "Highland Forest", href: "/portfolio/highland-forest", photo: "/photos/highland-forest-aerial.jpg", dek: "20,000+ sq ft estate with resort-level amenities" },
            { name: "Kings Manor", href: "/portfolio/kings-manor", photo: "/photos/kings-manor.jpg", dek: "Grand transitional estate with motor court and spa wing" },
            { name: "Sage at Marvin", href: "/portfolio/sage-at-marvin", photo: "/photos/renovation-facade.jpg", dek: "A private estate community of 23 homesites on 43 preserved acres" },
          ]}
        />
      </Band>

      <FaqSection heading="About Peters Custom Homes" items={FAQ} />

      <CloseBand
        title="Build Your Custom Home in Charlotte, NC"
        note="We welcome confidential conversations with families considering the creation of a private residence. Start with a confidential consultation."
        photo="/photos/estate-dusk.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-band-about] { grid-template-columns: 1fr !important; gap: 32px !important; } [data-band-method] { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
    </main>
  );
}
