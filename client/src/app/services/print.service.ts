import { Injectable } from '@angular/core';

export interface PrintMissionDetails {
  reference: string;
  employeeName: string;
  mle: string;
  fonction: string;
  hotelAffectation: string;
  destination: string;
  dateDebut: string;
  dateFin: string;
  heureDepart: string;
  heureRetour: string;
  objet: string;
  itineraire: string;
  vehicule: string;
  chauffeur: string;
  accompagnateurs: string[];
  notes?: string;
  dateEmission?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  printOrdreMission(details: PrintMissionDetails) {
    const printWindow = window.open('', '_blank', 'width=850,height=1100');
    if (!printWindow) {
      alert('Veuillez autoriser les fenêtres pop-up pour pouvoir imprimer.');
      return;
    }

    const dateEmission = details.dateEmission || new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const formatAccompagnateurs = () => {
      if (!details.accompagnateurs || details.accompagnateurs.length === 0) {
        return 'Aucun';
      }
      return details.accompagnateurs.join(', ');
    };

    const logoUrl = window.location.origin + '/El-mouradi.png';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Ordre de Mission - ${details.reference}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body, html {
            font-family: 'Inter', sans-serif;
            color: #1b1f2a;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            height: 297mm;
            overflow: hidden;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page-container {
            width: 210mm;
            height: 297mm;
            box-sizing: border-box;
            padding: 5mm 20mm 12mm 20mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            page-break-inside: avoid;
          }
          
          /* Header styles - Large Logo at the top */
          .header {
            text-align: center;
            margin-bottom: 2px;
          }
          .logo-box {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo-img {
            height: 90px;
            width: auto;
            object-fit: contain;
          }

          /* Content body */
          .content-body {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .doc-title-block {
            text-align: center;
            margin-top: 2px;
            margin-bottom: 8px;
          }
          .doc-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #1b1f2a;
            margin: 0 0 2px 0;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
          .doc-ref {
            font-size: 13px;
            font-weight: 600;
            color: #6b6b6b;
            margin: 0;
          }
          .meta-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12.5px;
            font-weight: 700;
            color: #1b1f2a;
            margin-bottom: 5px;
            font-family: 'Inter', sans-serif;
          }

          /* Info section */
          .section-title {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            font-weight: 700;
            color: #8B7D3C;
            border-bottom: 1.5px solid #8B7D3C;
            padding-bottom: 2px;
            margin-top: 6px;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2px;
          }
          .info-table td {
            padding: 2.5px 0;
            font-size: 12px;
            line-height: 1.3;
            vertical-align: top;
          }
          .info-table td.label {
            width: 32%;
            font-weight: 600;
            color: #6b6b6b;
          }
          .info-table td.value {
            width: 68%;
            color: #1b1f2a;
            font-weight: 500;
          }

          /* Signatures - Aligned right */
          .signatures-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
            margin-bottom: 10px;
          }
          .signature-block {
            width: 50%;
            text-align: center;
          }
          .signature-title {
            font-size: 11.5px;
            font-weight: 600;
            text-decoration: underline;
            margin-bottom: 40px;
            color: #1b1f2a;
            text-underline-offset: 3px;
            line-height: 1.4;
          }
          .signature-space {
            height: 35px;
          }

          /* Footer styling matching the user image strictly */
          .footer-container {
            width: 100%;
            box-sizing: border-box;
          }
          .footer-hotels-row {
            color: #8B7D3C;
            font-weight: 700;
            font-size: 9px;
            letter-spacing: 0.03em;
            text-align: center;
            text-transform: uppercase;
            padding-bottom: 6px;
            border-bottom: 1.5px solid #8B7D3C;
            margin-bottom: 6px;
            font-family: 'Inter', sans-serif;
          }
          .footer-details {
            text-align: center;
            font-size: 9.5px;
            color: #1b1f2a;
            line-height: 1.5;
            font-family: 'Inter', sans-serif;
          }
          .footer-details a {
            color: #8B7D3C;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            margin-top: 2px;
          }

          @media print {
            body, html {
              height: 297mm;
              overflow: hidden;
            }
            .page-container {
              height: 297mm;
              padding: 5mm 20mm 10mm 20mm;
              page-break-inside: avoid;
              page-break-after: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="page-container">
          
          <!-- Header (Official Letterhead Logo Only) -->
          <div class="header">
            <div class="logo-box">
              <img src="${logoUrl}" alt="El Mouradi Hotels Logo" class="logo-img" />
            </div>
          </div>

          <!-- Document Body -->
          <div class="content-body">
            
            <div class="meta-row">
              <div class="meta-left">Direction Générale</div>
              <div class="meta-right">Tunis, le ${dateEmission}</div>
            </div>

            <div class="doc-title-block">
              <h2 class="doc-title">Ordre de Mission</h2>
              <p class="doc-ref">Réf : ${details.reference}</p>
            </div>

            <!-- Section 1: Chauffeur et Moyen de Transport -->
            <div class="section-title">Chauffeur et Moyen de Transport</div>
            <table class="info-table">
              <tr>
                <td class="label">Moyen de transport :</td>
                <td class="value">${details.vehicule}</td>
              </tr>
              <tr>
                <td class="label">Chauffeur désigné :</td>
                <td class="value">${details.chauffeur}</td>
              </tr>
            </table>

            <!-- Section 2: Accompagnateurs -->
            <div class="section-title">Accompagnateurs</div>
            <table class="info-table">
              <tr>
                <td class="label">Accompagnateur Principal :</td>
                <td class="value">${details.employeeName} (MLE : ${details.mle} - ${details.fonction})</td>
              </tr>
              <tr>
                <td class="label">Hôtel d'affectation :</td>
                <td class="value">${details.hotelAffectation}</td>
              </tr>
              <tr>
                <td class="label">Autres Accompagnateurs :</td>
                <td class="value">${formatAccompagnateurs()}</td>
              </tr>
            </table>

            <!-- Section 3: Détails du Déplacement -->
            <div class="section-title">Détails du Déplacement</div>
            <table class="info-table">
              <tr>
                <td class="label">Destination :</td>
                <td class="value">${details.destination}</td>
              </tr>
              <tr>
                <td class="label">Objet de la Mission :</td>
                <td class="value">${details.objet}</td>
              </tr>
              ${details.itineraire ? `
              <tr>
                <td class="label">Itinéraire prévu :</td>
                <td class="value">${details.itineraire}</td>
              </tr>
              ` : ''}
            </table>

            <!-- Section 4: Période du Déplacement -->
            <div class="section-title">Période du Déplacement</div>
            <table class="info-table">
              <tr>
                <td class="label">Départ prévu :</td>
                <td class="value">${details.dateDebut} à ${details.heureDepart}</td>
              </tr>
              <tr>
                <td class="label">Retour prévu :</td>
                <td class="value">${details.dateFin} à ${details.heureRetour}</td>
              </tr>
              ${details.notes ? `
              <tr>
                <td class="label">Notes / Instructions :</td>
                <td class="value">${details.notes}</td>
              </tr>
              ` : ''}
            </table>

            <!-- Signatures - Manager Only -->
            <div class="signatures-container">
              <div class="signature-block">
                <div class="signature-title">Nom et Prénom du responsable<br>(Fonction, Signature et Cachet)</div>
                <div class="signature-space"></div>
              </div>
            </div>

          </div>

          <!-- Footer (Exact replica of the attached letterhead image) -->
          <div class="footer-container">
            <div class="footer-hotels-row">
              TUNIS,GAMMARTH,HAMMAMET,SOUSSE-PORT EL KANTOUI,MONASTIR,MAHDIA,DJERBA,DOUZ,TOZEUR,HAMMAM BOURGUIBA
            </div>
            <div class="footer-details">
              Direction Générale : El Mouradi HOTELS - B.P 48 El Kantaoui 4089 Port El Kantaoui – TUNISIE<br>
              Tél.: +216 73 246 355 - Fax.: +216 73 246 431 - E-mail : info@elmouradi.com<br>
              <a href="http://www.elmouradi.com" target="_blank">http://www.elmouradi.com</a>
            </div>
          </div>

        </div>

        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
}
