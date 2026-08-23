import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SECRET_KEY;

    console.log("SUPABASE_URL:", supabaseUrl ? "présent" : "MANQUANT");
    console.log("SUPABASE_SECRET_KEY:", supabaseKey ? "présent" : "MANQUANT");

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Configuration manquante.", details: { url: !!supabaseUrl, key: !!supabaseKey } }, { status: 500 });
    }

    const endpoint = `${supabaseUrl}/rest/v1/subscribers`;
    console.log("Calling:", endpoint);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ email }),
    });

    console.log("Supabase status:", res.status);

    if (!res.ok && res.status !== 409) {
      const errText = await res.text();
      console.log("Supabase error:", errText);
      return NextResponse.json({ error: "Erreur lors de l'inscription.", supabase: errText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("Catch error:", err);
    return NextResponse.json({ error: "Erreur serveur.", details: String(err) }, { status: 500 });
  }
}