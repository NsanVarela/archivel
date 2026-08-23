import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    // Intégration Brevo (Sendinblue) - gratuit jusqu'à 300 emails/jour
    // Configurez BREVO_API_KEY dans vos variables d'environnement Vercel
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID; // ID de la liste archivel dans Brevo

    if (brevoApiKey && brevoListId) {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [parseInt(brevoListId)],
          updateEnabled: true,
        }),
      });

      if (!res.ok && res.status !== 204) {
        const error = await res.json();
        // Email déjà inscrit = pas une erreur
        if (error.code !== "duplicate_parameter") {
          return NextResponse.json({ error: "Erreur lors de l'inscription." }, { status: 500 });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
