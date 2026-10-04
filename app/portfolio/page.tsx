import type { Metadata } from "next";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, PhotoRow, FaqSection, CloseBand, StatRow, QuoteBand, } from "@/app/components/Pages";

export const metadata: Metadata = {
  title: "Custom Home Portfolio | Charlotte NC Builder",
  description:
    "Explore our portfolio of architecturally significant private estates in Charlotte. Each residence reflects uncompromising craftsmanship and timeless design.",
};

/* PORTFOLIO — index of 8 residences with their copy. */

const RESIDENCES = [
  {
    name: "Highland Forest",
    href: "/portfolio/highland-forest",
    photo: "/photos/highland-forest-aerial.jpg",
    kicker: "Charlotte",
    type: "Transitional Estate",
    dek: "A distinguished private estate nestled within roughly three wooded acres in Charlotte — 18,142 sq ft with a wellness wing, two-lane bowling alley, and resort outdoor program.",
  },
  {
    name: "Kings Manor",
    href: "/portfolio/kings-manor",
    photo: "/photos/kings-manor.jpg",
    kicker: "Weddington, NC",
    type: "Resort-Style Custom Residence",
    dek: "A grand transitional estate with motor court and spa wing — 9,223 sq ft on 0.98 acres.",
  },
  {
    name: "S Baltusrol",
    href: "/portfolio/baltusrol",
    photo: "/photos/baltusrol.jpg",
    kicker: "Charlotte",
    type: "Golf Course Estate",
    dek: "A distinguished golf-course estate in Charlotte's renowned Quail Hollow community — 7,995 sq ft, built 2005 and renovated to the studs by Peters in 2021.",
  },
  {
    name: "Little Kern",
    href: "/portfolio/little-kern",
    photo: "/photos/living-fireplace.jpg",
    kicker: "Charlotte",
    type: "Contemporary Estate",
    dek: "A commanding modern estate — 15,000+ sq ft on 1.5+ wooded acres, completed 2019, with black marble fireplace and glass wine room.",
  },
  {
    name: "N Baltusrol",
    href: "/portfolio/n-baltusrol",
    photo: "/photos/estate-dusk.jpg",
    kicker: "Charlotte",
    type: "Estate Residence",
    dek: "A Peters-renovated estate residence in the Quail Hollow corridor.",
  },
  {
    name: "Winged Bourne",
    href: "/portfolio/winged-bourne",
    photo: "/photos/white-brick-manor.jpg",
    kicker: "Charlotte",
    type: "Estate Residence",
    dek: "An individually designed private estate residence.",
  },
  {
    name: "Twin Lakes",
    href: "/portfolio/twin-lakes",
    photo: "/photos/dark-study.jpg",
    kicker: "Charlotte",
    type: "Estate Residence",
    dek: "An individually designed private estate residence.",
  },
  {
    name: "Sage at Marvin",
    href: "/portfolio/sage-at-marvin",
    photo: "/photos/renovation-facade.jpg",
    kicker: "Marvin, NC",
    type: "Estate Community",
    dek: "An exclusive enclave of bespoke estate residences on 43 preserved acres — each individually designed to reflect the character of its site.",
  },
];

const FAQ = [
  { q: "What kinds of homes are shown in your portfolio?", a: "A curated selection of completed and in-progress residences — new custom estates, whole-home renovations, and the Sage at Marvin community. Each is shown with client permission; the majority of our homes remain private." },
  { q: "Can I tour a home in the portfolio?", a: "Sage at Marvin, our model estate community, is available for private tours. Completed client residences are private; we can arrange comparable walkthroughs of current work by appointment." },
  { q: "Do you build the same design twice?", a: "No. Every home is individually designed and custom built — we do not build from stock plans or repeat designs." },
  { q: "What does a portfolio residence cost?", a: "Our estate engagements typically begin at $2 million and extend well beyond, depending on architecture, finishes, and site conditions." },
];

export default function PortfolioPage() {
  return (
    <main>
      <InnerFold
        kicker="Portfolio"
        h1="Charlotte Custom Home Portfolio"
        dek="A curated collection of architecturally significant residences — each a testament to craft, vision, and trust."
        photo="/photos/estate-dusk.jpg"
        alt="Peters Custom Homes estate residence at dusk"
      />

      <Band>
        <Kicker>All Work</Kicker>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
          <H2>Portfolio Residences</H2>
          <div className="eyebrow">Showing 8 of 8</div>
        </div>
        <PhotoRow items={RESIDENCES.map((r) => ({ name: r.name, dek: r.dek, href: r.href, photo: r.photo, kicker: `${r.kicker} · ${r.type}` }))} cols={2} ratio={480} />
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Our Work</Kicker>
        <H2>Crafted with Precision, Built with Purpose</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
{            ["Each residence we build is a reflection of the people who live within it — thoughtful, intentional, and deeply personal."]}
</Lede>
          <Body>
{["At Peters Custom Homes, our work spans luxury custom construction, large-scale renovations, and legacy estate homes across the Charlotte region.",
            "Over the years, we have constructed 50+ multi-million dollar residences. Many of these homes are built for clients who value privacy; they are not shown publicly.",
            "Rather than showcase every project, we present a curated collection that reflects the level of execution, detail, and standards that define our firm."]}
</Body>
        </div>
      </Band>

      <Band>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64 }}>
          <div>
            <Kicker>Privacy & Trust</Kicker>
            <H2>True Luxury Is Built on Trust</H2>
            <div style={{ marginTop: 26 }}>
              <Body>
{["We believe true luxury is not defined by visibility, but by experience, trust, and the relationships we build with our clients.",
                "For this reason, the majority of the homes we construct remain private. The residences shown here are a carefully selected group shared with client permission."]}
</Body>
            </div>
          </div>
          <div>
            <Kicker>Informed by Experience</Kicker>
            <H2>Experience Informs Every Detail</H2>
            <div style={{ marginTop: 26 }}>
              <Body>
{["We believe true luxury requires a practical understanding of how estate-level materials, systems, and finishes perform — over years, not weeks.",
                "There is a difference between selecting products and truly knowing them.",
                "Years of hands-on construction experience give us a clear view of how materials age, how systems function, and how spaces actually live.",
                "Luxury is not just about appearance. It is about performance, longevity, and the way a home lives day after day."]}
</Body>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-pf] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </Band>

      <QuoteBand
        quote="Our lakefront estate required complex engineering and exquisite finishing. Peters Custom Homes handled every challenge with professionalism and skill."
        who="Lake Norman Homeowner"
        role="Waterfront Estate — Cornelius, NC"
      />

      <FaqSection heading="About These Residences" items={FAQ} />

      <CloseBand
        title="Envision Your Estate"
        note="We welcome confidential conversations with families considering the creation of a private residence."
        photo="/photos/living-fireplace.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-band-pf] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </main>
  );
}
