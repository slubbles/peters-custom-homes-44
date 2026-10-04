import type { Metadata } from "next";
import { InnerFold, Body, H2, H3, Kicker, Band, FaqSection, } from "@/app/components/Pages";
import { Inquiry } from "../components/Shared";

export const metadata: Metadata = {
  title: "Contact | Custom Home Builder Charlotte NC",
  description:
    "Contact Peters Custom Homes: 4401 Barclay Downs Dr #132, Charlotte, NC 28209 · 980-414-4194. Every inquiry receives a personal response within one business day.",
};

/* CONTACT — dedicated page. Facts as type, form posts to /api/submit. */

const FAQ = [
  { q: "How do I schedule a consultation with Peters Custom Homes?", a: "Complete the inquiry form on this page or email us directly. Nicholas Peters personally reviews every inquiry and typically responds within one business day to arrange a confidential consultation." },
  { q: "What should I prepare before our first conversation?", a: "Bring whatever you have — a homesite address or listing, architectural plans, an investment range, and a sense of your timeline. Many families begin with nothing more than a neighborhood they love and a vision for how they want to live." },
  { q: "Where is your office located, and do you accept walk-ins?", a: "Our office is located in SouthPark at 4401 Barclay Downs Drive, Suite 132, Charlotte, NC 28209. We meet by appointment only so a member of the firm can give the conversation full attention." },
  { q: "Which areas around Charlotte do you build in?", a: "We build custom residences and estate renovations throughout Charlotte and the surrounding communities — including Myers Park, Eastover, Foxcroft, SouthPark, Ballantyne, Marvin, Weddington, Waxhaw, and the Lake Norman towns — plus select communities in South Carolina." },
  { q: "Is there a minimum investment for a custom home project?", a: "We limit our work to 8-10 private residences each year so the founder stays personally involved. Most projects begin in the millions; a private consultation is the best way to confirm fit." },
  { q: "How quickly will I hear back after submitting the form?", a: "Nicholas Peters reviews inquiries personally and responds within one business day. Inquiries received over a weekend or holiday are answered on the next business day." },
  { q: "What happens during the first consultation?", a: "The first meeting runs about an hour. We discuss your vision, your homesite or the neighborhoods you are considering, review how our process works, and outline realistic investment and schedule ranges before any commitment." },
  { q: "Do you take on projects if I have not purchased land yet?", a: "Yes. Many families engage us before buying a homesite so we can evaluate topography, utilities, setbacks, and site-work costs before closing." },
  { q: "Can we meet remotely if we are relocating to Charlotte?", a: "Yes. We regularly conduct first consultations by video call for families relocating from out of state, then coordinate homesite tours when you visit." },
  { q: "Is my inquiry kept confidential?", a: "Yes. Client identities, homesites, and project details are never published or shared. Our public portfolio is limited to residences shown with client permission." },
];

export default function ContactPage() {
  return (
    <main>
      <InnerFold
        kicker="Contact"
        h1="Begin Your Estate Vision"
        dek="Every exceptional home begins with a thoughtful conversation."
        photo="/photos/estate-dusk.jpg"
        alt="Peters Custom Homes estate at dusk"
      />

      <Band>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 72, alignItems: "start" }}>
          <div>
            <Kicker>Get in Touch</Kicker>
            <H2>Contact Information</H2>
            <div style={{ marginTop: 34, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
              <div style={{ padding: "24px 0", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Office</div>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 24, lineHeight: 1.4 }}>
                  4401 Barclay Downs Dr #132<br />Charlotte, NC 28209
                </div>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Telephone</div>
                <a href="tel:+19804144194" style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 28, color: "var(--fg)", textDecoration: "none" }}>
                  980-414-4194
                </a>
              </div>
              <div style={{ padding: "24px 0", borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Service Areas</div>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted, #6f675c)", maxWidth: "44ch" }}>
                  Charlotte · South Charlotte · Marvin · Weddington · Lake Norman · North & South Carolina
                </p>
              </div>
              <div style={{ padding: "24px 0" }}>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Response Time</div>
                <p style={{ fontSize: 16.5, color: "var(--muted, #6f675c)" }}>
                  Every inquiry receives a personal response within one business day.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Kicker>Private Consultation</Kicker>
            <Inquiry source="Contact" heading="We Invite You to Begin a Confidential Conversation" />
            <p style={{ marginTop: 18, fontSize: 13.5, color: "var(--muted, #6f675c)", maxWidth: "60ch" }}>
              Every inquiry receives a personal response within one business day. If your matter is time-sensitive — a homesite under contract — call the office at 980-414-4194.
            </p>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-contact] { grid-template-columns: 1fr !important; gap: 44px !important; } }`}</style>
      </Band>

      <Band bg="#ece5d8">
        <Kicker>Our Location</Kicker>
        <H2>Charlotte Custom Home Builder Office</H2>
        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 56, alignItems: "center" }}>
          <Body>
            ["Located in the heart of SouthPark, our office serves as the starting point for families building luxury custom homes across the region.",
            "We meet by appointment — consultations, design reviews, and selection meetings are scheduled so every conversation gets undivided attention."]
          </Body>
          <div style={{ border: "1px solid var(--hairline, rgba(28,25,22,0.14))", padding: "30px 34px" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Office</div>
            <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 26, lineHeight: 1.4 }}>
              4401 Barclay Downs Dr #132
              <br />
              Charlotte, NC 28209
            </div>
            <p style={{ marginTop: 14, fontSize: 15, color: "var(--muted, #6f675c)" }}>
              SouthPark · by appointment
            </p>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-loc] { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
      </Band>

      <FaqSection heading="Before You Reach Out" items={FAQ} bg="var(--bg, #f4efe6)" />

      <style>{`@media (max-width: 900px){ [data-band-contact] { grid-template-columns: 1fr !important; gap: 44px !important; } [data-band-loc] { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </main>
  );
}
