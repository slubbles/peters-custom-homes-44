import Link from "next/link";

/* HOME FOLD — Base corner-weighted grammar: one full-bleed photograph,
   wordmark line at the top, plate of type bottom-left, one olive CTA.
   Photograph is theirs (living-room fireplace OG photo). No dark wash:
   the room is dark, the plate does the work. */

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
        src="/photos/living-fireplace.jpg"
        alt="Living room of a Peters Custom Homes estate with stone fireplace"
        className="photo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          minHeight: "80vh",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
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
            backdropFilter: "blur(6px)",
            color: "#f4efe6",
            padding: "56px 64px",
            maxWidth: 760,
          }}
        >
          <div
            className="eyebrow"
            style={{ color: "rgba(244,239,230,0.6)", marginBottom: 22 }}
          >
            Peters Custom Homes · Charlotte, North Carolina
          </div>
          <h1
            style={{
              fontSize: 68,
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              margin: 0,
              maxWidth: "16ch",
              color: "#f4efe6",
            }}
          >
            Charlotte&rsquo;s Premier Luxury Custom Home Builder
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(244,239,230,0.78)",
              maxWidth: "52ch",
              margin: "20px 0 0",
            }}
          >
            A founder-led custom home builder in Charlotte, NC, building eight to
            ten private residences a year — new homes and whole-home renovations
            in SouthPark, Myers Park, Eastover, Marvin, Weddington, and Lake
            Norman.
          </p>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
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
            </Link>
            <a
              href="tel:+19804144194"
              style={{
                color: "#f4efe6",
                textDecoration: "none",
                fontFamily: "var(--font-body), Inter, sans-serif",
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
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
        [data-hero] { padding: 0 !important; }
        [data-hero] > div { padding: 24px 20px 40px !important; }
        [data-hero] > div > div { padding: 36px 28px !important; }
        [data-hero] h1 { font-size: 44px !important; }
      }`}</style>
    </section>
  );
}
