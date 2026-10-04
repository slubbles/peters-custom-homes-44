import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Client portal sign-in for Peters Custom Homes construction updates.",
};

export default function LoginPage() {
  return (
    <section style={{ minHeight: "72vh", display: "grid", placeItems: "center", padding: "var(--pad, 96px)" }}>
      <div style={{ width: "min(420px, 100%)" }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>Client Portal</div>
        <h1 style={{ fontSize: 44, fontFamily: "var(--font-display), Georgia, serif", margin: 0 }}>Client Login</h1>
        <p style={{ marginTop: 14, color: "var(--muted)" }}>
          Construction updates, selections, and schedules for current Peters Custom Homes
          engagements.
        </p>
        <form style={{ marginTop: 30, display: "grid", gap: 16 }} action="/login" method="get">
          <input
            type="email"
            placeholder="Email"
            required
            style={{ width: "100%", border: "1px solid var(--hairline, rgba(28,25,22,0.14))", background: "transparent", padding: "12px 14px", fontSize: 16 }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{ width: "100%", border: "1px solid var(--hairline, rgba(28,25,22,0.14))", background: "transparent", padding: "12px 14px", fontSize: 16 }}
          />
          <button
            type="submit"
            className="pill"
            style={{ background: "var(--accent, #6B7040)", color: "#f4efe6", border: "none", cursor: "pointer", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}
          >
            Sign In
          </button>
        </form>
        <p style={{ marginTop: 18, fontSize: 13.5, color: "var(--muted)" }}>
          Need help signing in? Call the office at 980-414-4194.
        </p>
      </div>
    </section>
  );
}
