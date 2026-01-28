import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      city,
      serviceType,
      description,
      preferredDate,
      budget,
    } = body;

    // Validation basique
    if (!firstName || !lastName || !email || !phone || !city || !serviceType || !description) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      plomberie: "Plomberie générale",
      urgence: "Dépannage urgence",
      chauffage: "Installation chauffage",
      entretien: "Entretien chaudière",
      renovation: "Rénovation salle de bain",
      detection: "Détection de fuites",
      autre: "Autre demande",
    };

    const budgetLabels: Record<string, string> = {
      "moins-500": "Moins de 500€",
      "500-1000": "500€ - 1000€",
      "1000-3000": "1000€ - 3000€",
      "3000-5000": "3000€ - 5000€",
      "plus-5000": "Plus de 5000€",
      inconnu: "Non défini",
    };

    // Vérifier si la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.log("Mode démo - Email non envoyé (RESEND_API_KEY non configurée)");
      console.log("Données reçues:", { firstName, lastName, email, phone, city, serviceType, description, preferredDate, budget });
      return NextResponse.json({ success: true, demo: true });
    }

    // Import dynamique de Resend
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Envoi de l'email via Resend
    await resend.emails.send({
      from: "PlombiPro <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "romainmaes@outlook.fr"],
      replyTo: email,
      subject: `Demande de devis - ${serviceLabels[serviceType] || serviceType} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Nouvelle demande de devis</h1>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #1E40AF; margin-top: 0;">Informations client</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 150px;">Nom complet :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #1E40AF;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Téléphone :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color: #1E40AF; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Ville :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${city}</td>
              </tr>
            </table>

            <h2 style="color: #1E40AF; margin-top: 30px;">Détails du projet</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 150px;">Type de travaux :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1E40AF; font-weight: bold;">
                  ${serviceLabels[serviceType] || serviceType}
                </td>
              </tr>
              ${
                preferredDate
                  ? `<tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Date souhaitée :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${new Date(preferredDate).toLocaleDateString("fr-FR")}</td>
              </tr>`
                  : ""
              }
              ${
                budget
                  ? `<tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Budget :</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${budgetLabels[budget] || budget}</td>
              </tr>`
                  : ""
              }
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #374151;">Description du projet :</h3>
              <p style="color: #4B5563; white-space: pre-wrap;">${description}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background-color: #DBEAFE; border-radius: 8px;">
              <p style="margin: 0; color: #1E40AF;">
                💡 Pensez à recontacter le client sous 24h pour établir le devis
              </p>
            </div>
          </div>
          <div style="padding: 15px; background-color: #1E40AF; color: white; text-align: center; font-size: 12px;">
            PlombiPro - Plombier Chauffagiste Paris | romainmaes@outlook.fr
          </div>
        </div>
      `,
    });

    // Email de confirmation au client
    await resend.emails.send({
      from: "PlombiPro <onboarding@resend.dev>",
      to: [email],
      subject: "Confirmation de votre demande de devis - PlombiPro",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">PlombiPro</h1>
            <p style="margin: 10px 0 0;">Votre plombier de confiance</p>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #1E40AF;">Bonjour ${firstName},</h2>
            <p>Nous avons bien reçu votre demande de devis pour : <strong>${serviceLabels[serviceType] || serviceType}</strong></p>
            <p>Notre équipe va étudier votre projet et vous recontactera sous 24 heures pour discuter des détails et vous proposer un devis personnalisé.</p>

            <div style="margin: 20px 0; padding: 15px; background-color: white; border-radius: 8px; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #374151;">Récapitulatif de votre demande :</h3>
              <ul style="color: #4B5563;">
                <li>Type de travaux : ${serviceLabels[serviceType] || serviceType}</li>
                <li>Localisation : ${city}</li>
                ${preferredDate ? `<li>Date souhaitée : ${new Date(preferredDate).toLocaleDateString("fr-FR")}</li>` : ""}
              </ul>
            </div>

            <p>En cas d'urgence, n'hésitez pas à nous appeler directement au :</p>
            <p style="text-align: center; font-size: 24px; font-weight: bold; color: #1E40AF;">
              <a href="tel:0640533845" style="color: #1E40AF; text-decoration: none;">06 40 53 38 45</a>
            </p>

            <p>À très bientôt,</p>
            <p><strong>L'équipe PlombiPro</strong></p>
          </div>
          <div style="padding: 15px; background-color: #1E40AF; color: white; text-align: center; font-size: 12px;">
            PlombiPro - 15 Rue de la Fontaine, 75015 Paris<br/>
            romainmaes@outlook.fr | 06 40 53 38 45
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email contact:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
