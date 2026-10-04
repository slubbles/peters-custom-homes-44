export const dynamic = "force-dynamic";

const WEBHOOK = process.env.WEBHOOK_URL_CONTACT;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    try {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    } catch {
      return Response.json({ ok: false, error: "invalid payload" }, { status: 400 });
    }
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!name || !message) {
    return Response.json({ ok: false, error: "name and message are required" }, { status: 400 });
  }

  const record = {
    ok: true,
    receivedAt: new Date().toISOString(),
    source: typeof body.source === "string" ? body.source : "site",
    name,
    message,
  };

  if (WEBHOOK) {
    try {
      await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch {
      // webhook is best-effort; the submission is still recorded
    }
  }

  return Response.json(record);
}
