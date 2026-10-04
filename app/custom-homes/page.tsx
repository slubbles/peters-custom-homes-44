import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, PhotoRow, CloseBand } from "@/app/components/Pages";

/* CUSTOM HOMES — residences in progress, their copy and current project list. */

export const metadata: Metadata = {
  title: "Custom Homes Under Construction | Charlotte NC",
  description:
    "The custom homes currently under construction by Peters Custom Homes in Charlotte — Sage at Marvin, Broomes Road, and the residences in between.",
};

const CURRENT = [
  { n: "6,500 Heated Sq Ft", where: "Broomes Road" },
  { n: "5,500 Heated Sq Ft", where: "Lot 6, Sage at Marvin" },
  { n: "6,000 Heated Sq Ft", where: "Lot 9, Sage at Marvin" },
  { n: "12,000 Heated Sq Ft", where: "Lot 10, Sage at Marvin" },
  { n: "", where: "Lot 16, Sage at Marvin" },
  { n: "5,000 Heated Sq Ft", where: "Lot 17, Sage at Marvin" },
  { n: "4,500 Heated Sq Ft", where: "Lot 19, Sage at Marvin" },
  { n: "", where: "Lot 22, Sage at Marvin" },
  { n: "12,500 Heated Sq Ft", where: "Lot 23, Sage at Marvin" },
];

export default function CustomHomesPage() {
  return (
    <main>
      <InnerFold
        kicker="Custom Homes"
        h1="Custom Homes Under Construction"
        dek="Charlotte custom homes currently under construction — from Broomes Road to the estates of Sage at Marvin."
        photo="/photos/sage-aerial.jpg"
        alt="Aerial view of Sage at Marvin estate community"
      />

      <Band>
        <Kicker>Residences in Progress</Kicker>
        <H2>Currently Under Construction</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            As luxury home builders in Charlotte, we approach the creation of every private residence as a thoughtful collaboration between architecture, craftsmanship, and the families who will live there.
          </Lede>
          <Body>
            The luxury homes featured here represent Charlotte custom homes currently under construction by Peters Custom Homes.
            Whether you're envisioning your dream home with open floor plans, dedicated media rooms, or a bespoke home plan shaped to your homesite, each of these residences reflects the standards that guide every build.
          </Body>
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Construction</Kicker>
        <H2>The Craft Behind Every Residence</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Body>
            During construction, the character of a home begins to reveal itself. Structural systems take form, architectural details emerge, and the materials chosen for their beauty and longevity begin to define the residence. Whether your floor plans call for soaring ceilings, dedicated media rooms, or a modern farmhouse aesthetic, our commitment to quality craftsmanship is evident in every joint, every finish, and every carefully selected material.
            This phase of the construction process requires constant coordination between architects, engineers, artisans, and specialized trades. As dedicated custom home builders in Charlotte, every stage—from framing and masonry to energy efficient mechanical systems and finishing—is guided by careful planning and consistent oversight, whether the home plan is 4,000 sq ft or 18,000+ square feet.
            Nicholas Peters remains personally involved throughout the building process of each residence, ensuring that every luxury home we deliver faithfully realizes the architectural vision established during design.
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
            {"\u201c"}We intentionally build a limited number of homes each year.{"\u201d"}
          </blockquote>
        </div>
      </Band>

      <Band>
        <Kicker>Current Projects</Kicker>
        <H2>Homes Under Construction</H2>
        <div style={{ marginTop: 40, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
          {CURRENT.map((c, i) => (
            <div
              key={c.where}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                gap: 24,
                alignItems: "baseline",
                padding: "24px 4px",
                borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
              }}
            >
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: c.n ? 30 : 22, color: c.n ? "var(--fg)" : "var(--muted, #6f675c)" }}>
                {c.n || "In pre-construction"}
              </div>
              <div className="eyebrow" style={{ textAlign: "right" }}>{c.where}</div>
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Featured Community</Kicker>
        <H2>Sage at Marvin</H2>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ height: 420, overflow: "hidden", backgroundColor: "#e5ded2" }}>
              <img src="/photos/sage-at-marvin.jpg" alt="Sage at Marvin — private estate community in Marvin, NC" className="photo" />
            </div>
            <div className="eyebrow" style={{ marginTop: 14 }}>Marvin, North Carolina</div>
          </div>
          <div>
            <H3>A Sanctuary for Private Estate Living</H3>
            <div style={{ marginTop: 18 }}>
              <Body>
                Sage at Marvin represents a rare opportunity to build a custom estate within a private, gated community situated on 43 preserved acres in Marvin, North Carolina.
                Each homesite has been thoughtfully positioned to maximize privacy, natural views, and architectural flexibility, creating an enclave where residences of distinction coexist with the rolling landscape.
                Peters Custom Homes serves as the exclusive builder for this community, ensuring that every residence reflects the community's standards of architectural excellence and craftsmanship.
                Homesites at Sage at Marvin are available on a limited basis. We welcome inquiries from families considering this exceptional setting.
              </Body>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <Link href="/videos/sage-at-marvin" style={{ color: "var(--fg)", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5 }}>
                Watch the Full Sage at Marvin Tour
              </Link>
              <Link href="/journal/sage-at-marvin-custom-homes-2026-guide" style={{ color: "var(--fg)", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5 }}>
                Read the 2026 Guide
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-ch-cols] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </Band>

      <Band>
        <Kicker>Recent Estates</Kicker>
        <H2>Work in the Same Standard</H2>
        <PhotoRow
          items={[
            { name: "Highland Forest", href: "/portfolio/highland-forest", photo: "/photos/highland-forest-aerial.jpg", kicker: "Charlotte · 18,142 sq ft" },
            { name: "Kings Manor", href: "/portfolio/kings-manor", photo: "/photos/kings-manor.jpg", kicker: "Weddington · 9,223 sq ft" },
            { name: "Baltusrol", href: "/portfolio/baltusrol", photo: "/photos/baltusrol.jpg", kicker: "Charlotte · Quail Hollow" },
            { name: "Little Kern", href: "/portfolio/little-kern", photo: "/photos/living-fireplace.jpg", kicker: "Charlotte · 15,000+ sq ft" },
          ]}
          cols={4}
          ratio={300}
          altPrefix="Peters estate"
        />
      </Band>

      <CloseBand
        kicker="Residences in Progress"
        title="Tour a Home Under Construction"
        note="Walk the framing, meet the trades, and see the standard in person — by appointment."
        to="/tour"
        label="Schedule a Tour"
        photo="/photos/new-construction-vs-buying-south-charlotte.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-ch-cols] { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </main>
  );
}
