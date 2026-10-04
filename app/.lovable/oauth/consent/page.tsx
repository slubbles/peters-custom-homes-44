import Link from "next/link";

export default function ConsentPage() {
  return (
    <section style={{ minHeight: "72vh", display: "grid", placeItems: "center", padding: "var(--pad, 96px)" }}>
      <div style={{ width: "min(520px, 100%)" }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>Authorization Request</div>
        <h1 style={{ fontSize: 44, fontFamily: "var(--font-display), Georgia, serif", margin: 0 }}>Authorize this connection?</h1>
        <p style={{ marginTop: 16, color: "var(--muted)" }}>
          An application is requesting access to your account. Review and approve before
          continuing. If you did not start this sign-in, close this window.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/" className="pill" style={{ background: "var(--accent, #6B7040)", color: "#f4efe6", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
            Approve and continue
          </Link>
          <Link href="/" className="pill" style={{ border: "1px solid var(--hairline, rgba(28,25,22,0.14))", color: "var(--fg)", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
            Cancel
          </Link>
        </div>
      </div>
    </section>
  );
}
