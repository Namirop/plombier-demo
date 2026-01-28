import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city, urgencyType } = body;

    // Validation basique
    if (!name || !phone || !city || !urgencyType) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const urgencyLabels: Record<string, string> = {
      fuite: "Fuite d'eau importante",
      canalisation: "Canalisation bouchée",
      chaudiere: "Chaudière en panne",
      degat: "Dégât des eaux",
      ballon: "Ballon d'eau chaude défectueux",
      "eau-chaude": "Plus d'eau chaude",
    };

    // Vérifier si la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.log("Mode démo - Email non envoyé (RESEND_API_KEY non configurée)");
      console.log("Données reçues:", { name, phone, city, urgencyType });
      return NextResponse.json({ success: true, demo: true });
    }

    // Import dynamique de Resend
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Envoi de l'email via Resend
    await resend.emails.send({
      from: "PlombiPro <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "romainmaes@outlook.fr"],
      subject: `🚨 URGENCE - ${urgencyLabels[urgencyType] || urgencyType} - ${city}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #DC2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">🚨 DEMANDE URGENTE</h1>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #DC2626; margin-top: 0;">Nouvelle demande d'intervention urgente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Nom :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Téléphone :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color: #DC2626; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Ville :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${city}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Type d'urgence :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #DC2626; font-weight: bold;">
                  ${urgencyLabels[urgencyType] || urgencyType}
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #FEE2E2; border-radius: 8px;">
              <p style="margin: 0; color: #991B1B; font-weight: bold;">
                ⚡ Rappeler le client dans les plus brefs délais
              </p>
            </div>
          </div>
          <div style="padding: 15px; background-color: #1E40AF; color: white; text-align: center; font-size: 12px;">
            PlombiPro - Plombier Chauffagiste Paris
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email urgence:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
