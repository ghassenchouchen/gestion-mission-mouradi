import { Injectable } from '@angular/core';

export interface PrintMissionDetails {
  reference: string;
  employeeName: string;
  mle: string;
  fonction: string;
  hotelAffectation: string;
  destination: string;
  autresDestinations?: string[];
  dateDebut: string;
  dateFin?: string;
  heureDepart: string;
  heureRetour?: string;
  objet: string;
  itineraire: string;
  vehicule: string;
  chauffeurName?: string;
  vehiculeMarque?: string;
  vehiculeImmatriculation?: string;
  chauffeur: string;
  chauffeurEtablissement?: string;
  accompagnateurs: string[];
  notes?: string;
  dateEmission?: string;
  creeParRole?: string;
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

    // Helper to strip matricules from accompagnateur names (keeping names only)
    const stripMatricule = (nameStr: string): string => {
      if (!nameStr) return '';
      return nameStr
        .replace(/\s*\(\s*(?:MLE:?\s*)?\d+\s*\)/gi, '')
        .replace(/^\d{3,6}\s*[-–—:\s]+\s*/, '')
        .replace(/\s+\d{3,6}$/, '')
        .trim();
    };

    const rawEmployeeName = stripMatricule(details.employeeName || '');
    const cleanEmployeeName = (rawEmployeeName !== 'Aucun' && rawEmployeeName !== 'N/A' && rawEmployeeName !== '—') ? rawEmployeeName : '';
    const cleanedOtherAccompagnateurs = (details.accompagnateurs || []).map(stripMatricule).filter(name => name && name !== 'Aucun' && name !== 'N/A');

    const hasMainAccompagnateur = !!cleanEmployeeName;
    const hasOtherAccompagnateurs = cleanedOtherAccompagnateurs.length > 0;
    const hasAnyAccompagnateur = hasMainAccompagnateur || hasOtherAccompagnateurs;

    const buildAccompagnateursSection = () => {
      if (!hasAnyAccompagnateur) {
        return '';
      }

      let rows = '';
      if (hasMainAccompagnateur) {
        const labelText = hasOtherAccompagnateurs ? 'Accompagnateur Principal :' : 'Accompagnateur :';
        rows += `
          <tr>
            <td class="label">${labelText}</td>
            <td class="value">${cleanEmployeeName}</td>
          </tr>
        `;
      }

      if (hasOtherAccompagnateurs) {
        const labelText = hasMainAccompagnateur ? 'Autres Accompagnateurs :' : 'Accompagnateurs :';
        rows += `
          <tr>
            <td class="label">${labelText}</td>
            <td class="value">${cleanedOtherAccompagnateurs.join(', ')}</td>
          </tr>
        `;
      }

      return `
        <!-- Section 3: Accompagnateurs -->
        <div class="section-title">Accompagnateurs</div>
        <table class="info-table">
          ${rows}
        </table>
      `;
    };

    const entityNameHtml = `Direction générale El Mouradi<br>Services Généraux`;
    const chauffeurEtablissement = details.chauffeurEtablissement || 'Direction Générale';

    const rawChauffeur = details.chauffeurName || details.chauffeur || 'N/A';
    const chauffeurDisplay = rawChauffeur.replace(/^\d+\s*[-–—:\s]*/, '').replace(/\s*\(\d+\)$/, '');

    let vehiculeMarqueModel = details.vehiculeMarque || details.vehicule || 'N/A';
    let vehiculeImmat = details.vehiculeImmatriculation || '';

    if (!details.vehiculeMarque && details.vehicule) {
      const match = details.vehicule.match(/^(.*?)\s*\((.*?)\)$/);
      if (match) {
        vehiculeMarqueModel = match[1];
        vehiculeImmat = match[2];
      } else {
        vehiculeMarqueModel = details.vehicule.replace(/—/g, '-');
      }
    }

    if (vehiculeMarqueModel.includes(' - Immatriculation :')) {
      const parts = vehiculeMarqueModel.split(' - Immatriculation :');
      vehiculeMarqueModel = parts[0];
      vehiculeImmat = parts[1];
    }

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
            size: A4 portrait;
            margin: 0mm;
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
            padding: 9mm 20mm 10mm 20mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            page-break-inside: avoid;
          }
          
          /* Header styles - Large Logo at the top */
          .header {
            text-align: center;
            margin-bottom: 10px;
          }
          .logo-box {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo-img {
            height: 80px;
            width: auto;
            object-fit: contain;
          }

          /* Content body */
          .content-body {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .doc-title-block {
            text-align: center;
            margin-top: 4px;
            margin-bottom: 12px;
          }
          .doc-title {
            font-family: 'Playfair Display', serif;
            font-size: 21px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #1b1f2a;
            margin: 0 0 3px 0;
          }
          .doc-ref-badge {
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            color: #1b1f2a;
            background-color: #f4f5f8;
            border: 1px solid #d0d4e0;
            padding: 3.5px 13px;
            border-radius: 4px;
            letter-spacing: 0.03em;
            margin-top: 5px;
          }
          .meta-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12.5px;
            font-weight: 700;
            color: #1b1f2a;
            margin-bottom: 10px;
            font-family: 'Inter', sans-serif;
          }

          /* Info section */
          .section-title {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #8B7D3C;
            border-bottom: 1.5px solid #8B7D3C;
            padding-bottom: 3px;
            margin-top: 14px;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 6px;
          }
          .info-table td {
            padding: 4.5px 0;
            font-size: 12px;
            line-height: 1.45;
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

          /* Side-by-Side Period Card */
          .period-row {
            display: flex;
            align-items: center;
            background: #fafafa;
            border: 1px solid #e2e8f0;
            border-radius: 5px;
            padding: 9px 15px;
            margin-bottom: 8px;
          }
          .period-col {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .period-label {
            font-size: 11px;
            font-weight: 600;
            color: #6b6b6b;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }
          .period-value {
            font-size: 13px;
            font-weight: 600;
            color: #1b1f2a;
            margin-top: 2px;
          }
          .period-divider {
            width: 1px;
            height: 30px;
            background: #cbd5e1;
            margin: 0 18px;
          }

          /* Signatures - Aligned right */
          .signatures-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 32px;
            margin-bottom: 12px;
          }
          .signature-block {
            width: 50%;
            text-align: center;
          }
          .signature-title {
            font-size: 11.5px;
            font-weight: 600;
            text-decoration: underline;
            margin-bottom: 35px;
            color: #1b1f2a;
            text-underline-offset: 3px;
            line-height: 1.4;
          }
          .signature-space {
            height: 45px;
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
            html, body {
              width: 210mm;
              height: 297mm;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-container {
              width: 210mm !important;
              height: 297mm !important;
              padding: 8mm 20mm 12mm 20mm !important;
              box-sizing: border-box !important;
              page-break-inside: avoid !important;
              page-break-after: avoid !important;
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
            
            <div class="meta-row" style="margin-bottom: 10px; align-items: flex-start;">
              <div class="meta-left" style="line-height: 1.35;">
                <div style="text-align: center;">
                  <div>Direction générale El Mouradi</div>
                  ${(!details.creeParRole || details.creeParRole === 'USER') ? `<div style="font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 3px;">Services Généraux</div>` : ''}
                </div>
              </div>
              <div class="meta-right">El Kantaoui, le ${dateEmission}</div>
            </div>

            <div class="doc-title-block">
              <h2 class="doc-title">Ordre de Mission</h2>
              <div class="doc-ref-badge">Réf : ${details.reference}</div>
            </div>

            <!-- Section 1: Chauffeur -->
            <div class="section-title">Chauffeur</div>
            <table class="info-table">
              <tr>
                <td class="label">Chauffeur désigné :</td>
                <td class="value">${chauffeurDisplay}</td>
              </tr>
              <tr>
                <td class="label">Établissement :</td>
                <td class="value">${chauffeurEtablissement}</td>
              </tr>
            </table>

            <!-- Section 2: Véhicule -->
            <div class="section-title">Véhicule</div>
            <table class="info-table">
              <tr>
                <td class="label">Véhicule affecté :</td>
                <td class="value">${vehiculeMarqueModel}</td>
              </tr>
              ${(vehiculeImmat && vehiculeImmat !== 'Lui-même' && vehiculeImmat !== 'Aucun') ? `
              <tr>
                <td class="label">Immatriculation :</td>
                <td class="value" style="font-size: 14px; font-weight: 700; font-family: monospace;">${vehiculeImmat}</td>
              </tr>
              ` : ''}
            </table>

            ${buildAccompagnateursSection()}

            <!-- Section 3: Détails du Déplacement -->
            <div class="section-title">Détails du Déplacement</div>
            <table class="info-table">
              <tr>
                <td class="label">Destination(s) :</td>
                <td class="value">${details.destination}${details.autresDestinations && details.autresDestinations.length > 0 ? ', ' + details.autresDestinations.join(', ') : ''}</td>
              </tr>
              <tr>
                <td class="label">Objet de la Mission :</td>
                <td class="value">${details.objet}</td>
              </tr>
            </table>

            <!-- Section 4: Période du Déplacement -->
            <div class="section-title">Période du Déplacement</div>
            <div class="period-row">
              <div class="period-col">
                <span class="period-label">Départ prévu :</span>
                <span class="period-value">${details.dateDebut}${details.heureDepart ? ' à ' + details.heureDepart : ''}</span>
              </div>
              ${(details.dateFin || details.heureRetour) ? `
              <div class="period-divider"></div>
              <div class="period-col">
                <span class="period-label">Retour prévu :</span>
                <span class="period-value">${details.dateFin || ''}${details.heureRetour ? (details.dateFin ? ' à ' : '') + details.heureRetour : ''}</span>
              </div>
              ` : ''}
            </div>

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
