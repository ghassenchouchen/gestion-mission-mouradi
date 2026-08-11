import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';
import { ChauffeurService, OrdreMissionService, OrdreMission } from '../../services/api.service';

interface ChauffeurRow {
  id: number;
  mle: string | null;
  nom: string;
  prenom: string;
  telephone: string;
  etablissement: string;
  missions: MissionSpan[];
  missionDays: Map<number, MissionSpan>;
  totalMissionDays: number;
}

interface MissionSpan {
  id: number;
  reference: string;
  destination: string;
  employeeName: string;
  dateDebut: string;
  dateFin: string;
  heureDepart: string;
  heureRetour: string;
  statut: string;
}

@Component({
  selector: 'app-suivi-chauffeurs',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendrier-chauffeurs.html',
  styleUrl: './calendrier-chauffeurs.css'
})
export class CalendrierChauffeurs implements OnInit {
  private chauffeurService = inject(ChauffeurService);
  private ordreMissionService = inject(OrdreMissionService);
  private cdr = inject(ChangeDetectorRef);

  selectedMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
  selectedChauffeurId: number | 'all' = 'all';
  chauffeurRows: ChauffeurRow[] = [];
  daysInMonth: number[] = [];
  allMissions: OrdreMission[] = [];

  // Tooltip state
  tooltipVisible = false;
  tooltipX = 0;
  tooltipY = 0;
  tooltipMission: MissionSpan | null = null;

  ngOnInit() {
    this.loadData();
  }

  onMonthChange() {
    this.buildGrid();
  }

  loadData() {
    this.chauffeurService.getAll().subscribe({
      next: (drivers) => {
        this.ordreMissionService.getAll().subscribe({
          next: (missions) => {
            this.allMissions = missions;
            this.chauffeurRows = drivers.map(d => ({
              id: d.id,
              mle: d.mle || null,
              nom: d.nom,
              prenom: d.prenom,
              telephone: d.telephone || '',
              etablissement: d.etablissement?.nom || 'Direction Generale',
              missions: [],
              missionDays: new Map(),
              totalMissionDays: 0
            }));
            this.buildGrid();
            this.cdr.markForCheck();
          }
        });
      }
    });
  }

  buildGrid() {
    const [year, month] = this.selectedMonth.split('-').map(Number);
    const lastDay = new Date(year, month, 0).getDate();
    this.daysInMonth = Array.from({ length: lastDay }, (_, i) => i + 1);

    const monthStart = new Date(year, month - 1, 1);
    const monthEnd = new Date(year, month - 1, lastDay, 23, 59, 59);

    for (const row of this.chauffeurRows) {
      const chauffeurMissions = this.allMissions
        .filter(m => m.chauffeurId === row.id && m.statut !== 'ANNULE');

      row.missions = [];
      row.missionDays = new Map();

      for (const m of chauffeurMissions) {
        const mStart = new Date(m.dateDebut);
        const mEndRaw = m.dateFin ? new Date(m.dateFin) : new Date(m.dateDebut);
        const mEnd = new Date(mEndRaw.getFullYear(), mEndRaw.getMonth(), mEndRaw.getDate(), 23, 59, 59);

        // Check overlap with selected month
        if (mStart > monthEnd || mEnd < monthStart) continue;

        const span: MissionSpan = {
          id: m.id,
          reference: m.reference,
          destination: m.destination?.nom || 'N/A',
          employeeName: m.employe ? `${m.employe.prenom} ${m.employe.nom}` : '',
          dateDebut: m.dateDebut.split('T')[0],
          dateFin: m.dateFin ? m.dateFin.split('T')[0] : m.dateDebut.split('T')[0],
          heureDepart: m.heureDepart,
          heureRetour: m.heureRetour || '',
          statut: m.statut
        };

        row.missions.push(span);

        const clampedStart = Math.max(1, mStart.getUTCDate() >= 1 && mStart.getUTCMonth() === month - 1 && mStart.getUTCFullYear() === year
          ? mStart.getUTCDate() : 1);
        const clampedEnd = Math.min(lastDay, mEnd.getMonth() === month - 1 && mEnd.getFullYear() === year
          ? mEnd.getDate() : lastDay);

        const walkStart = new Date(Math.max(mStart.getTime(), monthStart.getTime()));
        const walkEnd = new Date(Math.min(mEnd.getTime(), monthEnd.getTime()));

        const cursor = new Date(walkStart.getFullYear(), walkStart.getMonth(), walkStart.getDate());
        while (cursor <= walkEnd) {
          if (cursor.getMonth() === month - 1 && cursor.getFullYear() === year) {
            const dayNum = cursor.getDate();
            if (!row.missionDays.has(dayNum)) {
              row.missionDays.set(dayNum, span);
            }
          }
          cursor.setDate(cursor.getDate() + 1);
        }
      }

      row.totalMissionDays = row.missionDays.size;
    }
  }

  get selectedMonthLabel(): string {
    const [y, m] = this.selectedMonth.split('-');
    const date = new Date(Number(y), Number(m) - 1, 1);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  getDayName(day: number): string {
    const [y, m] = this.selectedMonth.split('-').map(Number);
    const d = new Date(y, m - 1, day);
    return d.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '');
  }

  isWeekend(day: number): boolean {
    const [y, m] = this.selectedMonth.split('-').map(Number);
    const d = new Date(y, m - 1, day);
    const dow = d.getDay();
    return dow === 0 || dow === 6;
  }

  isToday(day: number): boolean {
    const now = new Date();
    const [y, m] = this.selectedMonth.split('-').map(Number);
    return now.getDate() === day && now.getMonth() === m - 1 && now.getFullYear() === y;
  }

  getMissionForDay(row: ChauffeurRow, day: number): MissionSpan | null {
    return row.missionDays.get(day) || null;
  }

  getShortRef(ref: string): string {
    // OM-2026-0012 -> 0012
    const parts = ref.split('-');
    return parts[parts.length - 1];
  }

  get filteredChauffeurRows(): ChauffeurRow[] {
    if (this.selectedChauffeurId === 'all') return this.chauffeurRows;
    return this.chauffeurRows.filter(r => r.id === Number(this.selectedChauffeurId));
  }

  get totalChauffeursOnMission(): number {
    return this.chauffeurRows.filter(r => r.totalMissionDays > 0).length;
  }

  get totalMissionDaysAllChauffeurs(): number {
    return this.chauffeurRows.reduce((s, r) => s + r.totalMissionDays, 0);
  }

  get totalMissionsThisMonth(): number {
    return this.chauffeurRows.reduce((s, r) => s + r.missions.length, 0);
  }

  showTooltip(event: MouseEvent, mission: MissionSpan) {
    this.tooltipMission = mission;
    this.tooltipX = event.clientX + 12;
    this.tooltipY = event.clientY - 10;
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;
    this.tooltipMission = null;
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'EN_COURS': return 'En cours';
      case 'PLANIFIE': return 'Planifiee';
      case 'TERMINE': return 'Terminee';
      default: return status;
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'EN_COURS': return 'status-encours';
      case 'PLANIFIE': return 'status-planifie';
      case 'TERMINE': return 'status-termine';
      default: return '';
    }
  }

  printMonthlyReport() {
    const logoUrl = window.location.origin + '/El-mouradi.png';
    const monthLabel = this.selectedMonthLabel;
    const [year, month] = this.selectedMonth.split('-').map(Number);
    const lastDay = new Date(year, month, 0).getDate();
    const days = Array.from({ length: lastDay }, (_, i) => i + 1);

    const targetRows = this.filteredChauffeurRows;
    const isSingleChauffeur = this.selectedChauffeurId !== 'all' && targetRows.length === 1;
    const singleDriver = isSingleChauffeur ? targetRows[0] : null;

    const reportTitle = isSingleChauffeur
      ? `Suivi Chauffeur - ${singleDriver?.prenom} ${singleDriver?.nom}`
      : `Suivi Chauffeurs`;

    // Scale row heights & font sizes dynamically for global mode to fill the A4 landscape canvas cleanly
    const rowPadding = isSingleChauffeur ? '5px 6px' : '7.5px 6px';
    const driverFontSize = isSingleChauffeur ? '10px' : '10.5px';
    const dayHeaderPadding = isSingleChauffeur ? '4px 0' : '6px 0';
    const dayHeaderFontSize = isSingleChauffeur ? '8.5px' : '9px';
    const symbolFontSize = isSingleChauffeur ? '7px' : '8.5px';
    const totalFontSize = isSingleChauffeur ? '10.5px' : '11px';

    const dayHeaders = days.map(d => {
      const date = new Date(year, month - 1, d);
      const dow = date.getDay();
      const isWe = dow === 0 || dow === 6;
      return `<th style="width: 22px; text-align: center; font-size: ${dayHeaderFontSize}; font-weight: 700; padding: ${dayHeaderPadding}; border: 1px solid #94a3b8; ${isWe ? 'background: #f1f5f9; color: #64748b;' : 'background: #fafbfd;'}">${d}</th>`;
    }).join('');

    // High-contrast mission cell fill (prints dark solid gray/black on B&W laser printers)
    const rowsHtml = targetRows.map(row => {
      const cells = days.map(d => {
        const mission = row.missionDays.get(d);
        const date = new Date(year, month - 1, d);
        const isWe = date.getDay() === 0 || date.getDay() === 6;
        if (mission) {
          return `<td class="cell-active" style="text-align: center; padding: 0; background: #334151; color: #ffffff; font-size: ${symbolFontSize}; font-weight: 700; border: 1px solid #1e293b; vertical-align: middle; -webkit-print-color-adjust: exact; print-color-adjust: exact;">■</td>`;
        }
        return `<td style="text-align: center; padding: 0; border: 1px solid #cbd5e1; ${isWe ? 'background: #f8fafc;' : ''}"></td>`;
      }).join('');

      return `<tr>
        <td style="width: 140px; max-width: 140px; padding: ${rowPadding}; font-size: ${driverFontSize}; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border: 1px solid #cbd5e1; background: #ffffff;">${row.prenom} ${row.nom}</td>
        ${cells}
        <td style="width: 32px; padding: ${rowPadding}; font-size: ${totalFontSize}; font-weight: 800; text-align: center; border: 1px solid #cbd5e1; background: ${row.totalMissionDays > 0 ? '#f1f5f9' : '#ffffff'}; color: #0f172a;">${row.totalMissionDays}</td>
      </tr>`;
    }).join('');

    // Mission detail summary table (ONLY rendered for single chauffeur mode)
    const detailTableHtml = isSingleChauffeur ? (() => {
      const detailRows = targetRows
        .flatMap(r => r.missions.map(m => ({
          chauffeur: `${r.prenom} ${r.nom}`,
          ...m
        })))
        .sort((a, b) => a.dateDebut.localeCompare(b.dateDebut))
        .map(r => `<tr>
          <td style="padding: 5px 6px; font-size: 9px; font-family: monospace; background: #f8fafc; border: 1px solid #cbd5e1;">${r.reference}</td>
          <td style="padding: 5px 6px; font-size: 9.5px; font-weight: 600; border: 1px solid #cbd5e1;">${r.chauffeur}</td>
          <td style="padding: 5px 6px; font-size: 9px; border: 1px solid #cbd5e1;">${r.employeeName || '-'}</td>
          <td style="padding: 5px 6px; font-size: 9px; border: 1px solid #cbd5e1;">${r.destination}</td>
          <td style="padding: 5px 6px; font-size: 9px; border: 1px solid #cbd5e1;">${new Date(r.dateDebut).toLocaleDateString('fr-FR', {day:'numeric', month:'short'})} - ${new Date(r.dateFin).toLocaleDateString('fr-FR', {day:'numeric', month:'short'})}</td>
        </tr>`).join('');

      return `
        <div class="section-title">Détail des ordres de mission</div>
        <table class="detail-table">
          <thead>
            <tr>
              <th style="text-align:left; font-size:8.5px; padding:5px 6px; background:#f1f5f9; border:1px solid #cbd5e1;">Réf.</th>
              <th style="text-align:left; font-size:8.5px; padding:5px 6px; background:#f1f5f9; border:1px solid #cbd5e1;">Chauffeur</th>
              <th style="text-align:left; font-size:8.5px; padding:5px 6px; background:#f1f5f9; border:1px solid #cbd5e1;">Demandeur</th>
              <th style="text-align:left; font-size:8.5px; padding:5px 6px; background:#f1f5f9; border:1px solid #cbd5e1;">Destination</th>
              <th style="text-align:left; font-size:8.5px; padding:5px 6px; background:#f1f5f9; border:1px solid #cbd5e1;">Période</th>
            </tr>
          </thead>
          <tbody>${detailRows || '<tr><td colspan="5" style="text-align:center; padding:10px; color:#64748b; font-style:italic;">Aucune mission ce mois.</td></tr>'}</tbody>
        </table>
      `;
    })() : '';

    const statsHeaderHtml = isSingleChauffeur
      ? `<strong>Chauffeur:</strong> ${singleDriver?.prenom} ${singleDriver?.nom} &bull; Établissement: <strong>${singleDriver?.etablissement || 'Direction Générale'}</strong> &bull; Total jours de mission: <strong>${singleDriver?.totalMissionDays}</strong>`
      : `<strong>${this.chauffeurRows.length}</strong> chauffeurs &bull; <strong>${this.totalChauffeursOnMission}</strong> mobilisés ce mois &bull; <strong>${this.totalMissionDaysAllChauffeurs}</strong> jours de mission au total`;

    let printIframe = document.getElementById('print-iframe') as HTMLIFrameElement;
    if (!printIframe) {
      printIframe = document.createElement('iframe');
      printIframe.id = 'print-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);
    }

    const doc = printIframe.contentDocument || printIframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title></title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  @page { size: A4 landscape; margin: 8mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; font-size: 10px; color: #0f172a; padding: 4px; background: #ffffff; }
  .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #d4a853; padding: 6px 16px 14px 8px; margin-bottom: 16px; width: 100%; box-sizing: border-box; }
  .header-left { flex: 1; display: flex; align-items: center; justify-content: flex-start; }
  .header-left img { height: 66px; max-height: 66px; width: auto; object-fit: contain; display: block; }
  .header-center { flex: 2; text-align: center; }
  .doc-title { font-size: 22px; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin: 0; line-height: 1.1; }
  .header-right { flex: 1; text-align: right; padding-right: 12px; }
  .dept-name { font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.03em; margin-bottom: 3px; }
  .month-label { font-size: 14px; font-weight: 700; color: #0f172a; }
  .summary-bar { margin-bottom: 14px; font-size: 11px; color: #334155; padding: 0 4px; }
  .summary-bar strong { color: #0f172a; }
  table.grid-table { width: 100%; border-collapse: collapse; table-layout: fixed; margin-bottom: 16px; }
  table.detail-table { width: 100%; border-collapse: collapse; }
  .section-title { font-size: 12px; font-weight: 700; margin: 16px 0 6px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; }
  .footer { margin-top: 20px; text-align: center; font-size: 9px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 8px; }
  @media print {
    body { padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    td.cell-active { background-color: #334151 !important; color: #ffffff !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    td, th { border-color: #64748b !important; }
  }
</style>
</head><body>
  <div class="header">
    <div class="header-left">
      <img src="${logoUrl}" alt="El Mouradi Hotels" />
    </div>
    <div class="header-center">
      <h1 class="doc-title">${isSingleChauffeur ? 'Suivi Chauffeur' : 'Suivi Chauffeurs'}</h1>
    </div>
    <div class="header-right">
      <div class="dept-name">Direction Générale</div>
      <div class="month-label">${monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1)}</div>
    </div>
  </div>

  <div class="summary-bar">
    ${statsHeaderHtml}
  </div>

  <table class="grid-table">
    <thead>
      <tr>
        <th style="width: 140px; text-align: left; font-size: 9.5px; padding: 5px 6px; background: #f1f5f9; border: 1px solid #cbd5e1;">Chauffeur</th>
        ${dayHeaders}
        <th style="width: 32px; text-align: center; font-size: 9.5px; padding: 5px 2px; background: #f1f5f9; border: 1px solid #cbd5e1; font-weight: 800;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml}
    </tbody>
  </table>

  ${detailTableHtml}

  <div class="footer">
    Rapport généré le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - El Mouradi Hotels - Direction Générale
  </div>
</body></html>`);

    doc.close();
    setTimeout(() => {
      printIframe.contentWindow?.focus();
      printIframe.contentWindow?.print();
    }, 300);
  }
}
