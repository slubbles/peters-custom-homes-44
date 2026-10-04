import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, FaqSection, CloseBand } from "@/app/components/Pages";

/* PROCESS — the Peters Method, eight phases, their copy. */

export const metadata: Metadata = {
  title: "Custom Home Building Process | Charlotte NC",
  description:
    "Eight deliberate phases — from first vision to final walkthrough — each guided by founder Nicholas Peters.",
};

const PHASES: { n: string; p: string }[] = [
  {
    n: "Discovery & Vision",
    p: "We begin with a private consultation to understand your family's lifestyle, aesthetic preferences, and aspirations — the foundation for every decision that follows.",
  },
  {
    n: "Land Evaluation",
    p: "Our team evaluates potential homesites, considering topography, orientation, views, and buildability to ensure your vision takes full advantage of the land.",
  },
  {
    n: "Architectural Collaboration",
    p: "We work alongside your architect—or connect you with one from our curated network—to develop plans that balance design ambition with constructability.",
  },
  {
    n: "Design Coordination",
    p: "Through our partnership with Emerald & Oak Design Studio, every interior selection—from stone to hardware—is coordinated with the architecture before construction begins.",
  },
  {
    n: "Pre-Construction Planning",
    p: "Detailed budgeting, scheduling, engineering, and permitting ensure a seamless transition from design to construction.",
  },
  {
    n: "Construction Management",
    p: "Nicholas Peters personally oversees construction with our seasoned team. Weekly updates with photography and on-site walkthroughs keep you close to the work.",
  },
  {
    n: "Quality Assurance",
    p: "Multi-stage quality inspections at every phase ensure the highest standards of craftsmanship. Nothing moves forward until it meets the Peters Standard.",
  },
  {
    n: "Final Delivery",
    p: "A thorough walkthrough and move-in ready delivery ensures your home is complete in every detail. Our commitment continues long after you receive the keys.",
  },
];

const FAQ = [
  {
    q: "How long does it take to build a custom home in Charlotte?",
    a: "For estate-scale residences, design and pre-construction typically span 4 to 8 months, followed by 12 to 24 months of construction depending on scale, site conditions, and level of detail.",
  },
  {
    q: "What are the steps in the Peters Custom Homes building process?",
    a: "There are eight phases: Discovery and Vision, Land Evaluation, Architectural Collaboration, Design Coordination, Pre-Construction Planning, Construction Management, Quality Assurance, and Final Delivery.",
  },
  {
    q: "Do you work with my own architect and designer?",
    a: "Yes. We collaborate with your architect and interior designer, or introduce you to trusted Charlotte-area professionals from our curated network.",
  },
  {
    q: "How much does it cost per square foot to build a custom home in Charlotte?",
    a: "Custom construction typically ranges from $400 to $800+ per square foot depending on architecture, structural complexity, and material specification.",
  },
  {
    q: "Is the contract fixed price or cost plus?",
    a: "Fixed-price contracts are finalized at the end of pre-construction planning, once engineering, permitting, and selections are complete — so the number you sign is the number you build on.",
  },
  {
    q: "Does Nicholas Peters personally oversee construction?",
    a: "Yes. The firm intentionally limits production to eight to ten private residences per year so the founder remains on every jobsite personally.",
  },
  {
    q: "What happens after the home is delivered?",
    a: "Delivery includes a comprehensive walkthrough, systems orientation, and punch-list completion. Our commitment continues through warranty and long-term stewardship.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <InnerFold
        kicker="The Peters Method"
        h1="Custom Home Building Process"
        dek="Eight deliberate phases — from first vision to final walkthrough — each guided by founder Nicholas Peters."
        photo="/photos/pre-construction-meeting-custom-home-charlotte.jpg"
        alt="Framing in progress on a Peters Custom Homes residence"
      />

      <Band>
        <Kicker>Our Methodology</Kicker>
        <H2>A Refined Method for Extraordinary Results</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            Creating a private residence is among the most meaningful endeavors a family will undertake. Our structured, transparent process is designed to deliver certainty at every stage — from the first conversation to the final walkthrough.
          </Lede>
          <Body>
            Whether you're building on your own lot in Myers Park, Eastover, or Lake Norman, or developing a legacy estate in Marvin or Weddington, the method is the same: founder-led, deliberate, and uncompromising.
            See the results in our portfolio of luxury custom homes and discover how our design collaboration with Emerald & Oak brings every vision to life.
          </Body>
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Eight Phases</Kicker>
        <H2>How a Peters Home Comes Together</H2>
        <div style={{ marginTop: 44, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
          {PHASES.map((m, i) => (
            <div
              key={m.n}
              style={{
                display: "grid",
                gridTemplateColumns: "88px minmax(0,1fr)",
                gap: 24,
                padding: "30px 0",
                borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                alignItems: "baseline",
              }}
            >
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 34, color: "var(--brass, #A8894A)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <H3>{m.n}</H3>
                <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--muted, #6f675c)", marginTop: 10, maxWidth: "66ch" }}>
                  {m.p}
                </p>
              </div>
            </div>
          ))}
        </div>
        <blockquote
          style={{
            marginTop: 56,
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: "34ch",
            margin: "56px auto 0",
            textAlign: "center",
          }}
        >
          {"\u201c"}Precision at every phase. Excellence in every detail.{"\u201d"}
        </blockquote>
        <div className="eyebrow" style={{ textAlign: "center", marginTop: 18 }}>
          Midpoint
        </div>
      </Band>

      <Band>
        <Kicker>The Peters Standard</Kicker>
        <H2>Craftsmanship, Materials, and Architectural Integrity</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            While the Peters Method defines how we build, the Peters Standard defines the level of quality behind every residence — the specification decisions, the trades we retain, and the materials that earn their place.
          </Lede>
          <Body>
            Our homes are designed and constructed using premium materials, thoughtful engineering, and refined architectural detailing — because a house that endures is assembled from decisions made long before framing begins.
            Every Peters Custom Home reflects a consistent philosophy:
          </Body>
        </div>
        <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, backgroundColor: "var(--hairline, rgba(28,25,22,0.14))" }}>
          {["Structural integrity", "Exceptional craftsmanship", "Carefully curated materials", "Timeless architectural design"].map((v) => (
            <div key={v} style={{ background: "var(--bg, #f4efe6)", padding: "26px 26px 30px", fontFamily: "var(--font-display), Georgia, serif", fontSize: 21, lineHeight: 1.3 }}>
              {v}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 30, fontSize: 17, lineHeight: 1.65, color: "var(--muted, #6f675c)", maxWidth: "70ch" }}>
          Every home we build is a testament to the method behind it.
        </p>
      </Band>

      <FaqSection heading="Our Building Process" items={FAQ} />

      <CloseBand
        kicker="Ready to Begin?"
        title="Speak With Nicholas Peters"
        note="We welcome confidential conversations with families considering the creation of a private residence."
        photo="/photos/living-fireplace.jpg"
      />
    </main>
  );
}
