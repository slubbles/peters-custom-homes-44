import type { Metadata } from "next";
import Link from "next/link";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, CloseBand, DisclosureNote } from "@/app/components/Pages";

/* HOW CONTRACTOR INTRODUCTIONS WORK — their four steps + program disclosure. */

export const metadata: Metadata = {
  title: "How Contractor Introductions Work | Peters Custom Homes",
  description:
    "Four steps from request to introduction — what Peters Custom Homes does, what we don't do, and how the hiring decision stays yours.",
};

const STEPS: { n: string; h: string; p: string }[] = [
  {
    n: "1",
    h: "Tell us about the project.",
    p: "Use the request form to describe the work, the rooms or areas involved, your city and ZIP code, and your preferred timing. You don't need a finished scope — a clear description of the goal and what you've noticed is enough to begin. Please don't include security codes, financial information or photographs of people.",
  },
  {
    n: "2",
    h: "We consider a possible introduction.",
    p: "Every request goes to Nicholas Peters, who reads it, shares it with the appropriate member of our staff, and may ask a clarifying question by email. We then consider whether one of the independent companies we know may be suitable for the type of work and location. Sometimes no suitable introduction is available, and we'll tell you so. We don't promise a response time or that any contractor will accept the project.",
  },
  {
    n: "3",
    h: "You decide whom to hire.",
    p: "If a potential connection is identified, and you've agreed that we may share your details, we help establish initial communication. The contractor evaluates the home and prepares its own proposal. Compare it with any others you gather, ask for references, and confirm licensing and insurance appropriate to the scope. You are never obliged to hire a company we introduce.",
  },
  {
    n: "4",
    h: "You work together directly.",
    p: "Your agreement is with the contractor you choose. Scope, pricing, schedule, change orders, payments, workmanship and warranty are between you and that company. PCH's role is limited to introductions and initial communication: PCH doesn't sign proposals, approve changes, collect payments, direct crews, inspect or certify the work.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <InnerFold
        kicker="Home Projects Program"
        h1="How Contractor Introductions Work"
        dek="Four steps from request to introduction — and how the hiring decision always stays yours."
        photo="/photos/pre-construction-meeting-custom-home-charlotte.jpg"
        alt="Pre-construction meeting on a Peters Custom Homes jobsite"
      />

      <Band>
        <Kicker>The Steps</Kicker>
        <H2>From Request to Introduction</H2>
        <div style={{ marginTop: 44, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                display: "grid",
                gridTemplateColumns: "88px minmax(0,1fr)",
                gap: 24,
                padding: "30px 0",
                borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                alignItems: "baseline",
              }}
            >
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 34, color: "var(--brass, #A8894A)" }}>
                {s.n}
              </div>
              <div>
                <H3>{s.h}</H3>
                <p style={{ fontSize: 16.5, lineHeight: 1.68, color: "var(--muted, #6f675c)", marginTop: 10, maxWidth: "66ch" }}>
                  {s.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Beyond an Introduction</Kicker>
        <H2>If You Need More Than an Introduction</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Lede>
            If you'd like someone to plan and manage a larger, multi-trade project, that is a different conversation. Tell us about it through the renovation inquiry; any PCH construction role is established only in a separate written agreement.
          </Lede>
          <div style={{ marginTop: 30, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href="/home-projects/request" className="pill" style={{ background: "var(--accent, #6B7040)", color: "#f4efe6", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
              Request an Introduction
            </Link>
            <Link href="/renovation-inquiry" style={{ color: "var(--fg)", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5, display: "inline-block", alignSelf: "center" }}>
              Renovation Inquiry
            </Link>
          </div>
        </div>
      </Band>

      <Band>
        <Kicker>About This Introduction Program</Kicker>
        <H2>What the Program Is — and Isn't</H2>
        <div style={{ marginTop: 28, maxWidth: 940 }}>
          <Body>
            The Home Projects & Contractor Introductions program is an introduction resource offered by Peters Custom Homes, Inc. For projects handled through this program, the homeowner independently selects and retains the service provider. Any estimate, scope of work, construction agreement, payment, change order, schedule, permit obligation, workmanship commitment, or warranty is between the homeowner and the retained provider, as applicable to their agreement and the law.
            PCH's role is limited to reviewing introduction requests and facilitating initial connections. PCH does not undertake construction management, jobsite supervision, inspection, or certification of the referred work. An introduction does not guarantee a provider's availability, price, licensing status, insurance coverage, workmanship, conduct, financial condition, or suitability for a particular project. Homeowners should independently evaluate the provider and confirm the qualifications and coverage appropriate to the proposed scope.
            A contractor's work on a separate PCH project does not make PCH a party to that contractor's agreement with you. A separate direct PCH construction engagement exists only if agreed in a separate written agreement. Nothing in this disclosure eliminates any duty or liability that applicable law places on PCH for its own conduct or limits rights that cannot lawfully be waived.
          </Body>
          <div style={{ marginTop: 26 }}>
            <Link href="/home-projects/terms" style={{ color: "var(--fg)", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--brass, #A8894A)", paddingBottom: 5 }}>
              Read the Contractor Introduction Terms & Disclosures
            </Link>
          </div>
        </div>
      </Band>

      <CloseBand
        kicker="Home Projects Program"
        title="Ready to Tell Us About the Project?"
        note="A few minutes in the request form gives Nicholas Peters enough to consider a suitable introduction."
        to="/home-projects/request"
        label="Request an Introduction"
        photo="/photos/pre-construction-meeting-custom-home-charlotte.jpg"
      />
    </main>
  );
}
