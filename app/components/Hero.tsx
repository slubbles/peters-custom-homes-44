/* HERO.tsx — homepage fold: full-bleed photograph of their work (Casa photograph-as-material),
   display type over a dark plate, one contact CTA. 80vh min. Their photo, plain <img>. */

export default function Hero() {
  return (
    <section
      className="hero"
      data-hero
      style={{
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/photos/highland-forest-aerial.jpg"
        alt="Highland Forest — a Peters Custom Homes estate in Charlotte at dusk"
        className="photo"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "var(--pad, 96px)",
        }}
      >
        <div
          style={{
            background: "rgba(28, 25, 22, 0.82)",
            color: "#f4efe6",
            padding: "44px 52px",
            maxWidth: 820,
          }}
        >
          <div className="eyebrow" style={{ color: "rgba(244,239,230,0.6)", marginBottom: 18 }}>
            Peters Custom Homes · Charlotte, North Carolina
          </div>
          <h1
            style={{
              fontSize: 68,
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#f4efe6",
              maxWidth: "18ch",
              margin: 0,
            }}
          >
            Charlotte&rsquo;s Premier Luxury Custom Home Builder
          </h1>
          <p
            style={{
              marginTop: 18,
              fontSize: 17.5,
              lineHeight: 1.6,
              color: "rgba(244,239,230,0.78)",
              maxWidth: "52ch",
            }}
          >
            A founder-led builder creating architecturally significant private residences — eight to ten a year, from Myers Park to Lake Norman.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
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
              }}
            >
              Request a Private Consultation
            </a>
            <a
              href="tel:+19804144194"
              style={{
                color: "#f4efe6",
                textDecoration: "none",
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(244,239,230,0.4)",
                paddingBottom: 4,
              }}
            >
              980-414-4194
            </a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px){
        [data-hero] > div { padding: 0 !important; min-height: 80vh !important; }
        [data-hero] > div > div { padding: 30px 24px 40px !important; }
        [data-hero] h1 { font-size: 40px !important; }
      }`}</style>
    </section>
  );
}
