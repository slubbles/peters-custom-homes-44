import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/gen-articles";
import { JOURNAL_INDEX } from "@/lib/journal-data";
import { InnerFold, Lede, Body, H2, H3, Kicker, Band, FaqSection } from "@/app/components/Pages";

/* JOURNAL ARTICLE — [slug] catch-all, 138 static entries; dedicated /journal index remains a page.tsx. */

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.path.replace("/journal/", "") }));
}

function findArticle(slug: string) {
  return ARTICLES.find((a) => a.path === `/journal/${slug}`);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) return { title: "Journal | Peters Custom Homes" };
  return { title: a.title, description: a.desc };
}

const fmt = (iso: string | null) =>
  iso
    ? new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) notFound();

  const related = a.related.length ? a.related : JOURNAL_INDEX.filter((j) => j.url !== a.path).slice(0, 4).map((j) => ({ href: j.url, label: j.headline }));
  const relatedMeta = new Map(JOURNAL_INDEX.map((j) => [j.url, j.date]));

  return (
    <main>
      <InnerFold
        kicker={`Journal · ${fmt(a.updated) || "Peters Custom Homes"}`}
        h1={a.h1}
        dek={a.desc || undefined}
        photo={a.photo || "/photos/coffered-ceiling.jpg"}
        alt={`${a.h1} — Peters Custom Homes journal`}
      />

      <Band>
        <div style={{ maxWidth: 880 }}>
          {a.secs.map((s, i) => {
            if (s.cap) return null;
            if (s.kind === "h3" && s.text === "CONTINUE EXPLORING") return null;
            if (s.kind === "h2") return <div key={i} style={{ marginTop: 56 }}><H2>{s.text}</H2></div>;
            if (s.kind === "h3") return <div key={i} style={{ marginTop: 40 }}><H3>{s.text}</H3></div>;
            if (s.kind === "li")
              return (
                <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", alignItems: "baseline" }}>
                  <span style={{ color: "var(--brass, #A8894A)" }}>·</span>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--muted, #6f675c)", maxWidth: "66ch", margin: 0 }}>{s.text}</p>
                </div>
              );
            const first = a.secs.slice(0, i).every((x) => x.cap || x.kind !== "p");
            return first ? (
              <div key={i} style={{ marginTop: 8 }}><Lede>{s.text}</Lede></div>
            ) : (
              <div key={i} style={{ marginTop: 16 }}><Body>{s.text}</Body></div>
            );
          })}
        </div>
      </Band>

      {a.faq.length ? <FaqSection heading="Frequently Asked Questions" items={a.faq} bg="#ece5d8" /> : null}

      <Band>
        <Kicker>Keep Reading</Kicker>
        <H2>More From the Journal</H2>
        <div style={{ marginTop: 36, borderTop: "1px solid var(--hairline, rgba(28,25,22,0.14))" }}>
          {related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) auto",
                gap: 24,
                alignItems: "baseline",
                borderBottom: "1px solid var(--hairline, rgba(28,25,22,0.14))",
                padding: "22px 4px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: 23, lineHeight: 1.3 }}>
                {r.label}
              </div>
              {relatedMeta.get(r.href) ? (
                <div className="eyebrow" style={{ whiteSpace: "nowrap" }}>{fmt(relatedMeta.get(r.href) || null)}</div>
              ) : null}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Link
            href="/journal"
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
            Back to the Journal
          </Link>
        </div>
      </Band>
    </main>
  );
}
