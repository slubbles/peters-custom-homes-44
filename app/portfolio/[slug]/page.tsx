import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO } from "@/lib/portfolio";
import {
  InnerFold,
  Lede,
  Body,
  H2,
  H3,
  Kicker,
  Band,
  PhotoRow,
  FaqSection,
  CloseBand,
  StatRow,
} from "@/app/components/Pages";

/* PORTFOLIO DETAIL — one residence per route, facts + story + gallery with captions. */

export function generateStaticParams() {
  return PORTFOLIO.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = PORTFOLIO.find((x) => x.slug === slug);
  if (!r) return { title: "Portfolio | Peters Custom Homes" };
  return {
    title: `${r.name} | ${r.location} Custom Residence`,
    description: `${r.name} — ${r.type.toLowerCase()} in ${r.location}. ${r.facts.map((f) => f.k.toLowerCase() + " " + f.v).join(", ")}. Built by Peters Custom Homes, Charlotte's distinguished luxury custom home builder.`,
  };
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = PORTFOLIO.find((x) => x.slug === slug);
  if (!r) notFound();

  const related = PORTFOLIO.filter((x) => x.slug !== slug).slice(0, 3);

  const faq = [
    {
      q: `Where is ${r.name} located?`,
      a: `${r.name} sits in ${r.location}, within the communities Peters Custom Homes serves across the greater Charlotte region.`,
    },
    {
      q: `What is the scope of the ${r.name} project?`,
      a: `${r.facts.map((f) => f.v).join(" · ")} — ${r.type.toLowerCase()} executed to the Peters Standard.`,
    },
    {
      q: "Can Peters Custom Homes build a residence like this for my family?",
      a: "Every Peters home is individually designed — we do not repeat designs. If this level of craft resonates, begin with a private consultation.",
    },
  ];

  return (
    <main>
      <InnerFold
        kicker={`${r.type} · ${r.location}`}
        h1={r.name}
        dek={
          r.facts.length
            ? r.facts.map((f) => f.v).join(" · ")
            : undefined
        }
        photo={r.photo}
        alt={`${r.name} — ${r.type.toLowerCase()}, ${r.location}, built by Peters Custom Homes`}
      />

      <Band>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: 72, alignItems: "start" }}>
          <div>
            <Kicker>Residence Facts</Kicker>
            <div style={{ borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
              {r.facts.map((f) => (
                <div
                  key={f.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1fr)",
                    gap: 18,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                    alignItems: "baseline",
                  }}
                >
                  <div className="eyebrow" style={{ margin: 0 }}>
                    {f.k}
                  </div>
                  <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 21, lineHeight: 1.3 }}>
                    {f.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Kicker>The Residence</Kicker>
            <Lede>
              {r.body
                .filter((b) => b.kind === "p" && !/^[A-Z0-9 &,'’\/\-–—]+$/.test(b.text))
                .slice(0, 2)
                .map((b) => b.text)}
            </Lede>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ [data-band-pd] { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
      </Band>

      {/* Story — their exact copy, one idea per band */}
      {(() => {
        const blocks = r.body.filter((b) => !(b.kind === "p" && /^[A-Z0-9 &,'’\/\-–—]+$/.test(b.text)));
        const paras = blocks.filter((b) => b.kind === "p");
        const heads = blocks.filter((b) => b.kind !== "p");
        const mid = Math.max(1, Math.round(paras.length / 2));
        return (
          <>
            <Band bg="#ece5d8">
              <div style={{ maxWidth: 920 }}>
                <Kicker>The Story</Kicker>
                <Body>{paras.slice(0, mid).map((b) => b.text)}</Body>
              </div>
            </Band>
            <div style={{ position: "relative", overflow: "hidden", maxHeight: 560 }}>
              <img
                src={r.gallery[1] || r.photo}
                alt={`${r.name} — interior detail`}
                className="photo"
                style={{ width: "100%", height: 560, objectFit: "cover" }}
              />
            </div>
            <Band>
              <div style={{ maxWidth: 920 }}>
                {heads.length ? <H2>{String(heads[0].text)}</H2> : null}
                <div style={heads.length ? { marginTop: 28 } : undefined}>
                  <Body>{paras.slice(mid).map((b) => b.text)}</Body>
                </div>
              </div>
            </Band>
          </>
        );
      })()}

      {/* Gallery */}
      {r.gallery.length ? (
        <Band bg="#ece5d8">
          <Kicker>Gallery</Kicker>
          <H2>{`Inside ${r.name}`}</H2>
          <PhotoRow
            items={r.gallery.slice(0, 9).map((g, i) => ({
              name: r.captions[i] || `${r.name} — ${i + 1}`,
              href: "#gallery",
              photo: g,
            }))}
            cols={3}
            ratio={320}
            altPrefix={r.name}
          />
        </Band>
      ) : null}

      <FaqSection heading={`About ${r.name}`} items={faq} />

      {/* Related residences */}
      <Band>
        <Kicker>More From the Portfolio</Kicker>
        <H2>Related Residences</H2>
        <PhotoRow
          items={related.map((x) => ({
            name: x.name,
            dek: x.type,
            href: `/portfolio/${x.slug}`,
            photo: x.photo,
            kicker: x.location,
          }))}
          cols={3}
          ratio={340}
          altPrefix="Related Peters residence"
        />
        <div style={{ marginTop: 40 }}>
          <Link
            href="/portfolio"
            style={{
              color: "var(--fg)",
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid var(--brass, #A8894A)",
              paddingBottom: 5,
            }}
          >
            View the Full Portfolio
          </Link>
        </div>
      </Band>

      <CloseBand
        kicker="Begin Your Estate Vision"
        title={`Design a Home in the Spirit of ${r.name}`}
        note="Every Peters residence is designed from scratch around one family. We welcome the conversation."
        photo="/photos/living-fireplace.jpg"
      />

      <style>{`@media (max-width: 900px){ [data-band-pd] { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
    </main>
  );
}
