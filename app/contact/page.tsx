import InnerFold from "../components/InnerFold";

function ContactBody() {
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
        Visit
      </h2>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <InnerFold title="Contact" />
      <ContactBody />
    </main>
  );
}
