/* HERO.tsx - copy to app/components/Hero.tsx (or src/components/Hero.tsx).
   Render as the homepage first band. Do not shrink into a card.
   Fold plate: corner. */

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
          background: "transparent",
        }}
      >
        <h1
          style={{
            fontSize: 68,
            fontFamily: "var(--font-display)",
            lineHeight: 1.05,
            color: "var(--fg, #1a1714)",
            maxWidth: "16ch",
            margin: 0,
            textAlign: "left",
          }}
        >
          {"Peters Custom Homes"}
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--fg, #1a1714)",
            maxWidth: "42ch",
            margin: "16px 0 0",
          }}
        >
          {"Custom home builder in Charlotte, North Carolina"}
        </p>
        <a
          href="/contact"
          style={{
            marginTop: 28,
            color: "#ffffff",
            background: "transparent",
            border: "1px solid var(--accent, #C8102E)",
            padding: 14,
            width: "fit-content",
            textDecoration: "none",
          }}
        >
          {"Call +1-980-414-4194"}
        </a>
      </div>
    </section>
  );
}
