/* CHROME.tsx — corner-weighted chrome: crest TL, tracked nav TR (Base grammar),
   warm-paper field, one olive accent. Their wordmark + their slugs. */

const NAV = [
  { href: "/about", label: "About" },
  { href: "/custom-homes", label: "Custom Homes" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "#f4efe6" : "var(--fg, #1c1916)";
  const line = dark ? "rgba(244,239,230,0.28)" : "var(--hairline, rgba(28,25,22,0.14))";
  return (
    <header
      data-chrome="corner"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 48px",
        gap: 24,
      }}
    >
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        {/* Their crest mark (ASSET_LOCK favicon + crest plate) on a hard light plate */}
        <img
          src="/brand/logo-crest.png"
          alt="Peters Custom Homes crest"
          width={34}
          height={34}
          style={{ width: 34, height: 34, borderRadius: 4, objectFit: "cover", backgroundColor: "#ffffff" }}
        />
        <span
          style={{
            color: ink,
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: 15,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Peters Custom Homes
        </span>
      </a>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 26,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            style={{
              color: ink,
              textDecoration: "none",
              fontFamily: "var(--font-body), Inter, sans-serif",
              fontSize: 12.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              opacity: 0.85,
            }}
          >
            {n.label}
          </a>
        ))}
        <a
          href="/contact"
          className="pill"
          style={{
            background: "var(--accent, #6B7040)",
            color: "#f4efe6",
            fontSize: 12.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            padding: "10px 22px",
          }}
        >
          Consultation
        </a>
      </nav>
      <style>{`@media (max-width: 900px){ [data-chrome="corner"]{ padding: 18px 20px !important; } [data-chrome="corner"] nav{ gap: 14px !important; display:none; } }`}</style>
      <style>{`@media (max-width: 900px){ [data-chrome-mobile="show"]{ display:flex !important; } }`}</style>
      <div style={{ borderTop: `1px solid ${line}`, position: "absolute", left: 48, right: 48, bottom: -14, display: "none" }} />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      data-chrome="footer"
      style={{
        background: "#23261e",
        color: "#f4efe6",
        padding: "var(--pad, 96px) 48px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: 360 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <img
              src="/brand/logo-crest.png"
              alt="Peters Custom Homes crest"
              width={40}
              height={40}
              style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", backgroundColor: "#ffffff" }}
            />
            <span
              style={{
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 14,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Peters Custom Homes
            </span>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(244,239,230,0.72)", margin: 0 }}>
            A founder-led custom home builder in Charlotte, NC, building eight to ten private
            residences a year — new homes and whole-home renovations in SouthPark, Myers Park,
            Eastover, Marvin, Weddington, and Lake Norman.
          </p>
        </div>
        <FooterCol
          title="Studio"
          links={[
            { href: "/about", label: "About" },
            { href: "/about/nicholas-peters", label: "Nicholas Peters" },
            { href: "/process", label: "The Peters Method" },
            { href: "/the-peters-standard", label: "The Peters Standard" },
            { href: "/testimonials", label: "Testimonials" },
            { href: "/journal", label: "Journal" },
          ]}
        />
        <FooterCol
          title="Work"
          links={[
            { href: "/portfolio", label: "Portfolio" },
            { href: "/custom-homes", label: "Under Construction" },
            { href: "/floor-plans", label: "Floor Plans" },
            { href: "/renovations", label: "Renovations" },
            { href: "/legacy-estates", label: "Legacy Estates" },
            { href: "/videos", label: "Video Tours" },
          ]}
        />
        <FooterCol
          title="Build"
          links={[
            { href: "/where-we-build-hub", label: "Where We Build" },
            { href: "/neighborhoods", label: "Neighborhoods" },
            { href: "/cost-calculator", label: "Cost Calculator" },
            { href: "/faq", label: "FAQ" },
            { href: "/realtors", label: "For Realtors" },
            { href: "/contact", label: "Contact" },
          ]}
        />
        <div style={{ minWidth: 240 }}>
          <div className="eyebrow" style={{ color: "rgba(244,239,230,0.5)", marginBottom: 14 }}>
            Office
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: 0, color: "rgba(244,239,230,0.86)" }}>
            4401 Barclay Downs Dr #132
            <br />
            Charlotte, NC 28209
            <br />
            <a href="tel:+19804144194" style={{ color: "#f4efe6", textDecoration: "none" }}>
              980-414-4194
            </a>
            <br />
            <a href="mailto:npeters@peterscustomhomes.com" style={{ color: "#f4efe6", textDecoration: "none" }}>
              npeters@peterscustomhomes.com
            </a>
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: "1px solid rgba(244,239,230,0.16)",
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "space-between",
          fontSize: 13,
          color: "rgba(244,239,230,0.55)",
        }}
      >
        <span>Peters Custom Homes, Inc. · Charlotte, North Carolina · Since 2016</span>
        <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/privacy-policy" style={{ color: "rgba(244,239,230,0.72)", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="/terms-of-use" style={{ color: "rgba(244,239,230,0.72)", textDecoration: "none" }}>
            Terms of Use
          </a>
          <a href="/website-disclaimer" style={{ color: "rgba(244,239,230,0.72)", textDecoration: "none" }}>
            Website Disclaimer
          </a>
        </span>
      </div>
      <style>{`@media (max-width: 900px){ [data-chrome="footer"]{ padding: 48px 20px 32px !important; } }`}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div style={{ minWidth: 150 }}>
      <div className="eyebrow" style={{ color: "rgba(244,239,230,0.5)", marginBottom: 14 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{ color: "rgba(244,239,230,0.86)", textDecoration: "none", fontSize: 15 }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
