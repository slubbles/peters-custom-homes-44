import InnerFold from "../../components/InnerFold";

function HowItWorksBody() {
  return (
    <section style={{ padding: "var(--pad, 96px)" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Steps
      </h2>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <InnerFold title="How It Works" />
      <HowItWorksBody />
    </main>
  );
}
