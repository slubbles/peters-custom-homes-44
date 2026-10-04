import Link from "next/link";
import Hero from "./components/Hero";
import { Inquiry, SectionHead } from "./components/Shared";

/* HOME — composed per COMPOSITION.md bands with Peters Custom Homes copy.
   LOOK grammar: Casa warm-paper field + photograph-as-material bands,
   Base corner-weighted chrome, one olive accent. No invented facts:
   phone, address, reviews, costs, neighborhoods all from their site. */

const WORK = [
  {
    name: "Highland Forest",
    place: "South Charlotte",
    line: "20,000+ sq ft estate with resort-level amenities",
    photo: "/photos/highland-forest-aerial.jpg",
    href: "/portfolio/highland-forest",
  },
  {
    name: "Kings Manor",
    place: "Charlotte",
    line: "Grand transitional estate with motor court and spa wing",
    photo: "/photos/kings-manor.jpg",
    href: "/portfolio/kings-manor",
  },
  {
    name: "Sage at Marvin",
    place: "Marvin, NC",
    line: "Tour our Sage at Marvin model estate",
    photo: "/photos/renovation-facade.jpg",
    href: "/portfolio/sage-at-marvin",
  },
  {
    name: "The Study",
    place: "Estate interiors",
    line: "Ground-up luxury construction from 4,000 to over 20,000 square feet",
    photo: "/photos/dark-study.jpg",
    href: "/portfolio",
  },
];

const SERVICES = [
  {
    h: "New Construction Homes in Charlotte",
    p: "Ground-up luxury custom homes designed and built to the highest standard — from initial architecture through final finishing. Our design-build approach delivers architecturally significant residences across Charlotte NC.",
    href: "/custom-homes",
    photo: "/photos/white-brick-manor.jpg",
  },
  {
    h: "Luxury Home Renovations Charlotte",
    p: "Whole-home transformations and high-end renovations that honor the original architecture while elevating every detail to meet modern luxury expectations across Myers Park, Eastover, and SouthPark.",
    href: "/renovations",
    photo: "/photos/luxury-kitchen-renovations-charlotte.jpg",
  },
  {
    h: "Estate Development",
    p: "Comprehensive guidance for families building on significant homesites requiring complex planning, entitlements, and site development across Charlotte and the Carolinas.",
    href: "/estate-development",
    photo: "/photos/sage-aerial.jpg",
  },
];

const NEIGHBORHOODS = [
  { n: "Myers Park", href: "/myers-park-luxury-homes", p: "/photos/myers-park.jpg" },
  { n: "Eastover", href: "/eastover-luxury-homes", p: "/photos/eastover.jpg" },
  { n: "Foxcroft", href: "/foxcroft-luxury-homes", p: "/photos/foxcroft.jpg" },
  { n: "SouthPark", href: "/southpark-luxury-homes", p: "/photos/southpark-luxury-homes-building-guide.jpg" },
  { n: "Ballantyne", href: "/ballantyne-luxury-homes", p: "/photos/ballantyne.jpg" },
  { n: "Marvin & Weddington", href: "/marvin-weddington-luxury-homes", p: "/photos/weddington-estates.jpg" },
  { n: "Lake Norman", href: "/lake-norman-luxury-homes", p: "/photos/lake-norman.jpg" },
  { n: "Davidson", href: "/davidson-luxury-homes", p: "/photos/davidson.jpg" },
  { n: "Cornelius", href: "/cornelius-luxury-homes", p: "/photos/cornelius.jpg" },
  { n: "Mooresville", href: "/mooresville-luxury-homes", p: "/photos/mooresville.jpg" },
  { n: "Waxhaw", href: "/waxhaw-luxury-homes", p: "/photos/waxhaw.jpg" },
  { n: "All Neighborhoods", href: "/neighborhoods", p: "/photos/morrocroft.jpg" },
];

const STEPS = [
  {
    n: "Vision",
    p: "Private discovery consultation to understand your family's lifestyle, aspirations, and architectural goals.",
  },
  {
    n: "Planning",
    p: "Homesite evaluation, feasibility analysis, and early collaboration with architects to establish a clear direction.",
  },
  {
    n: "Design",
    p: "A collaborative design process bringing together architects, engineers, and our preferred design team to shape every detail.",
  },
  {
    n: "Construction",
    p: "Precision-managed construction with consistent oversight, weekly updates, and uncompromising quality standards.",
  },
  {
    n: "Completion",
    p: "Carefully guided final delivery ensuring every detail meets the expectations of the families we serve.",
  },
];

const QUOTES = [
  {
    q: "We absolutely love our new home. What distinguished the home building experience was Nicholas's personal attention to detail at every stage. There was never a moment when we felt handed off or uncertain about who was accountable.",
    who: "Private Estate Client — Charlotte, NC",
  },
  {
    q: "The quality craftsmanship and top notch care taken with every detail gave us confidence that this luxury home will serve our family for generations. We highly recommend Peters Custom Homes to anyone building your dream home in Charlotte.",
    who: "South Charlotte Family — Custom Estate",
  },
  {
    q: "We interviewed several luxury home builders in North Carolina. Peters was the only custom home builder where the principal remained personally involved in the building process from our first conversation through move-in.",
    who: "Myers Park Homeowner — Whole-Home Renovation",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* 2 — Recent Custom Homes Built in Charlotte, NC */}
      <section style={{ padding: "var(--pad, 96px)" }}>
        <SectionHead
          kicker="Recent Projects"
          title="Recent Custom Homes Built in Charlotte, NC"
          lede="A curated portfolio of custom built homes reflecting the individuality of each family and the architectural character of Charlotte's most distinguished neighborhoods. Each estate is built through The Peters Method."
          href={{ label: "View the Portfolio", to: "/portfolio" }}
        />
        <div style={{ marginTop: 56, display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {WORK.map((w) => (
            <Link
              key={w.name}
              href={w.href}
              style={{ display: "block", textDecoration: "none", color: "inherit" }}
            >
              <div style={{ height: 420, overflow: "hidden", backgroundColor: "#e5ded2" }}>
                <img
                  src={w.photo}
                  alt={`${w.name} — Peters Custom Homes estate, ${w.place}`}
                  className="photo"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline", marginTop: 18 }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>{w.place}</div>
                  <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 28, lineHeight: 1.15 }}>{w.name}</div>
                </div>
              </div>
              <p style={{ fontSize: 15.5, color: "var(--muted)", marginTop: 6, maxWidth: "40ch" }}>{w.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 — What a Founder-Led Charlotte Home Builder Delivers */}
      <section
        style={{
          background: "#ece5d8",
          padding: "var(--pad, 96px)",
        }}
      >
        <SectionHead
          kicker="What We Do"
          title="What a Founder-Led Charlotte Home Builder Delivers"
          lede="Comprehensive custom home building services — ground-up luxury construction, whole-home renovations, estate development, and private advisory — one point of accountability from first conversation to final walkthrough."
          href={{ label: "All Services", to: "/services" }}
        />
        <div style={{ marginTop: 56, display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {SERVICES.map((s) => (
            <Link key={s.h} href={s.href} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div style={{ height: 320, overflow: "hidden", backgroundColor: "#e5ded2" }}>
                <img src={s.photo} alt={s.h} className="photo" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 26, lineHeight: 1.2, margin: "20px 0 0" }}>{s.h}</h3>
              <p style={{ fontSize: 15.5, color: "var(--muted)", marginTop: 10 }}>{s.p}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — Neighborhoods and Communities We Serve */}
      <section style={{ padding: "var(--pad, 96px)" }}>
        <SectionHead
          kicker="Charlotte & Beyond"
          title="Neighborhoods and Communities We Serve"
          lede="From the tree-lined estates of Myers Park and the historic grandeur of Eastover to lakefront living on Lake Norman and the pastoral elegance of Marvin and Weddington."
          href={{ label: "Where We Build", to: "/where-we-build-hub" }}
        />
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            backgroundColor: "var(--hairline, rgba(28,25,22,0.14))",
            border: "1px solid var(--hairline, rgba(28,25,22,0.14))",
          }}
        >
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.n}
              href={n.href}
              style={{
                position: "relative",
                display: "block",
                minHeight: 150,
                padding: 20,
                backgroundColor: "var(--bg, #f4efe6)",
                textDecoration: "none",
                color: "inherit",
                overflow: "hidden",
              }}
            >
              <img
                src={n.p}
                alt=""
                className="photo"
                style={{ position: "absolute", inset: 0, opacity: 0.16, transition: "opacity .3s" }}
              />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 21 }}>{n.n}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5 — The Peters Method (how we build) */}
      <section
        id="method"
        style={{
          background: "#23261e",
          color: "#f4efe6",
          padding: "var(--pad, 96px)",
        }}
      >
        <SectionHead
          kicker="Our Charlotte Custom Home Building Process"
          title="Five founder-led phases, one point of accountability"
          lede="The Peters Method takes each engagement from first private consultation to final walkthrough — with Nicholas Peters personally accountable at every stage. Most engagements run eighteen to thirty months from design to move-in."
          dark
          href={{ label: "The Full Process", to: "/process" }}
        />
        <div
          style={{
            marginTop: 64,
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            backgroundColor: "rgba(244,239,230,0.16)",
          }}
        >
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ backgroundColor: "#23261e", padding: "30px 24px 38px" }}>
              <div
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: 15,
                  color: "var(--brass, #A8894A)",
                  letterSpacing: "0.08em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 27, marginTop: 12 }}>{s.n}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(244,239,230,0.66)", marginTop: 12 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 — The Builder You Meet Is the Builder You Get (about) */}
      <section style={{ padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", alignItems: "stretch" }}>
          <div style={{ minHeight: 560 }}>
            <img
              src="/photos/founder-portrait.jpg"
              alt="Nicholas Peters, founder of Peters Custom Homes"
              className="photo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ padding: "var(--pad, 96px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Personal Leadership</div>
            <h2 style={{ fontSize: 40, fontFamily: "var(--font-display), Georgia, serif", lineHeight: 1.12, margin: 0, maxWidth: "18ch" }}>
              The Builder You Meet Is the Builder You Get
            </h2>
            <p style={{ marginTop: 22, color: "var(--muted)" }}>
              Peters Custom Homes was founded in 2016 and works out of an office at 4401 Barclay
              Downs Drive in SouthPark. We take on eight to ten private residences a year. That
              number is deliberate — it is what allows Nicholas Peters to stay on each project
              himself, from the first conversation about how a family actually lives to the final
              walkthrough.
            </p>
            <p style={{ marginTop: 16, color: "var(--muted)" }}>
              He has been building custom homes in Charlotte since 2016, holds an A+ rating with
              the Better Business Bureau, and is recognized among the top 1% of North Carolina
              contractors.
            </p>
            <blockquote
              style={{
                marginTop: 28,
                padding: "22px 0 0",
                borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 22,
                lineHeight: 1.4,
                maxWidth: "42ch",
              }}
            >
              &ldquo;I know every trade on my jobsites by name, and I walk the punch list myself.
              If a house carries my family&rsquo;s name on the permit, I am the one answering for
              it.&rdquo;
            </blockquote>
            <div style={{ marginTop: 30, display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/about" style={{ color: "var(--fg)", fontSize: 15, borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 4, textDecoration: "none" }}>
                About the Firm
              </Link>
              <Link href="/about/nicholas-peters" style={{ color: "var(--fg)", fontSize: 15, borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 4, textDecoration: "none" }}>
                Nicholas Peters
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-about] { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* 7 — What Our Charlotte Homeowners Say */}
      <section style={{ background: "#ece5d8", padding: "var(--pad, 96px)" }}>
        <SectionHead
          kicker="Charlotte Custom Home Builder Reviews"
          title="What Our Charlotte Homeowners Say"
          lede="Verified 4.9-star reviews from families across Myers Park, Eastover, Foxcroft, SouthPark, Marvin & Weddington, and Lake Norman — 4.9 average across 71+ verified reviews."
          href={{ label: "All Testimonials", to: "/testimonials" }}
        />
        <div style={{ marginTop: 56, display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", backgroundColor: "var(--hairline, rgba(28,25,22,0.14))" }}>
          {QUOTES.map((t) => (
            <figure key={t.who} style={{ margin: 0, backgroundColor: "#f4efe6", padding: "34px 30px" }}>
              <div style={{ color: "var(--brass, #A8894A)", fontSize: 16, letterSpacing: "0.24em" }}>★★★★★</div>
              <blockquote style={{ margin: "18px 0 0", fontFamily: "var(--font-display), Georgia, serif", fontSize: 20, lineHeight: 1.45 }}>
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="eyebrow" style={{ marginTop: 22 }}>{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 8 — Begin Your Custom Home Journey (contact) */}
      <section id="contact" style={{ padding: "var(--pad, 96px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>By Invitation</div>
            <h2 style={{ fontSize: 44, fontFamily: "var(--font-display), Georgia, serif", lineHeight: 1.1, margin: 0, maxWidth: "20ch" }}>
              Begin Your Custom Home Journey
            </h2>
            <p style={{ marginTop: 20, color: "var(--muted)" }}>
              A confidential conversation with the founder — to understand your vision, evaluate
              your homesite, and determine whether your project aligns with the eight to ten
              private residences Peters Custom Homes will undertake this year.
            </p>
            <div style={{ marginTop: 34, fontSize: 17, lineHeight: 2 }}>
              <div>
                Office — 4401 Barclay Downs Drive, Suite 132, Charlotte, NC 28209
              </div>
              <div>
                <a href="tel:+19804144194" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>
                  980-414-4194
                </a>
                {"  ·  "}
                <a href="mailto:npeters@peterscustomhomes.com" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)" }}>
                  npeters@peterscustomhomes.com
                </a>
              </div>
              <div className="eyebrow" style={{ marginTop: 18 }}>Now accepting select 2026 engagements</div>
            </div>
          </div>
          <Inquiry source="Homepage" heading="Request a Private Consultation with Nicholas Peters" />
        </div>
        <style>{`@media (max-width: 900px){ [data-band-contact] { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      <style>{`
        @media (max-width: 900px){
          [data-band-about] { grid-template-columns: 1fr !important; }
          [data-band-contact] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
