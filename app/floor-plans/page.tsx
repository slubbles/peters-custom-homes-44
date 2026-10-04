import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, PhotoRow, CloseBand } from "@/app/components/Pages";

/* FLOOR PLANS — six reference estate designs, their copy and specs. */

export const metadata: Metadata = {
  title: "Luxury Floor Plans & Estate Designs | Charlotte NC",
  description:
    "Six reference estate plans drawn from the residences Peters Custom Homes builds most often — modern European, transitional, organic modern, traditional, statement modern, and legacy cottage.",
};

const PLANS = [
  {
    kicker: "Modern European",
    name: "Modern European Manor",
    specs: ["5 bedrooms · 6.5 baths", "8,400 sq ft", "2 stories + finished lower level"],
    dek: "A limestone-clad European estate quietly re-drawn for how Charlotte families actually live — restrained massing, generous glazing, and a plan that resolves entertaining, wellness, and privacy on one motor court.",
    photo: "/photos/white-brick-manor.jpg",
  },
  {
    kicker: "Transitional",
    name: "Transitional Estate",
    specs: ["5 bedrooms · 5.5 baths", "7,100 sq ft", "2 stories"],
    dek: "Traditional bones, modern lifestyle. A hip-roof estate with symmetrical brick façade, deep porches, and an interior organized for open-plan family living without sacrificing the formal moments a Charlotte estate expects.",
    photo: "/photos/estate-dusk.jpg",
  },
  {
    kicker: "Organic Modern",
    name: "Organic Modern Lake Estate",
    specs: ["4 bedrooms · 4.5 baths", "6,800 sq ft", "1 story with walk-out lower level"],
    dek: "A single-level lake residence organized on the view axis: long horizontal massing, natural stone, warm timber, and a covered water-facing terrace that becomes the primary living room nine months of the year.",
    photo: "/photos/lake-norman-luxury-homes.jpg",
  },
  {
    kicker: "Traditional",
    name: "Traditional Manor",
    specs: ["6 bedrooms · 6.5 baths", "9,200 sq ft", "2 stories + carriage suite"],
    dek: "A Georgian-inspired estate for Myers Park, Eastover, and Foxcroft: symmetrical brick, dentil cornices, formal dining, wood-paneled study, and a family wing that carries the plan comfortably into a contemporary household.",
    photo: "/photos/myers-park-luxury-homes.jpg",
  },
  {
    kicker: "Statement Modern",
    name: "Statement Modern",
    specs: ["5 bedrooms · 6 baths", "8,000 sq ft", "2 stories + rooftop terrace"],
    dek: "A confident architectural statement — cantilevered volumes, floor-to-ceiling glazing, and a rooftop terrace — engineered for buyers who want their residence to read as a piece of contemporary architecture, not a style reference.",
    photo: "/photos/open-concept-luxury-home-charlotte.jpg",
  },
  {
    kicker: "European Cottage",
    name: "Compact Legacy Cottage",
    specs: ["3 bedrooms · 3.5 baths", "4,600 sq ft", "1.5 stories"],
    dek: "A right-sized legacy home for empty-nesters and second-home buyers: main-level primary, three suites, wine and wellness rooms, and material quality equal to any 8,000-sq-ft estate on the block.",
    photo: "/photos/breakfast-room.jpg",
  },
];

export default function FloorPlansPage() {
  return (
    <main>
      <InnerFold
        kicker="Floor Plans"
        h1="Luxury Floor Plans & Estate Designs"
        dek="Six reference plans drawn from the residences we build most often — each an architectural starting point, adapted to your homesite."
        photo="/photos/design-studio.jpg"
        alt="Estate floor plan drawings on a worktable"
      />

      <Band>
        <Kicker>The Reference Library</Kicker>
        <H2>Start From a Proven Plan</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            Luxury floor plans, refined for how Charlotte estates are actually lived in.
          </Lede>
          <Body>
            Six reference plans drawn from the residences we build most often. Each is an architectural starting point — adapted through The Peters Method to your homesite, orientation, and family. Nothing here is a spec catalog; every plan is redrawn for the lot it will occupy.
          </Body>
        </div>
      </Band>

      {PLANS.map((pl, i) => {
        const flip = i % 2 === 1;
        return (
          <Band key={pl.name} bg={flip ? "#ece5d8" : undefined}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
                gap: 64,
                alignItems: "center",
                direction: flip ? "rtl" : "ltr",
              }}
            >
              <div style={{ direction: "ltr" }}>
                <div style={{ height: 380, overflow: "hidden", backgroundColor: "#e5ded2" }}>
                  <img src={pl.photo} alt={`${pl.name} — ${pl.kicker} estate plan by Peters Custom Homes`} className="photo" />
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                <Kicker>{pl.kicker}</Kicker>
                <H2>{pl.name}</H2>
                <div style={{ marginTop: 20, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                  {pl.specs.map((s) => (
                    <div key={s} style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "11px 2px", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                      <span style={{ color: "var(--brass, #A8894A)" }}>·</span>
                      <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 18 }}>{s}</span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 22, fontSize: 16.5, lineHeight: 1.65, color: "var(--muted, #6f675c)", maxWidth: "56ch" }}>
                  {pl.dek}
                </p>
              </div>
            </div>
            <style>{`@media (max-width: 900px){ [data-plan-cols] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
          </Band>
        );
      })}

      <Band bg="#23261e">
        <div style={{ maxWidth: 900 }}>
          <Kicker dark>Begin With a Plan. Finish With a Legacy.</Kicker>
          <p style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 32, lineHeight: 1.35, color: "#f4efe6", margin: 0, maxWidth: "40ch" }}>
            Every plan in this library becomes something else the moment it meets your lot.
          </p>
          <div style={{ marginTop: 34, display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/contact" className="pill" style={{ background: "var(--accent, #6B7040)", color: "#f4efe6", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
              Begin a Private Consultation
            </Link>
            <Link href="/portfolio" className="pill" style={{ border: "1px solid rgba(244,239,230,0.4)", color: "#f4efe6", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
              See the Residences
            </Link>
          </div>
        </div>
      </Band>
    </main>
  );
}
