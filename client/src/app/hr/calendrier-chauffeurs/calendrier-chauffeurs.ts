import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';
import { ChauffeurService, OrdreMissionService } from '../../services/api.service';

interface ChauffeurMission {
  missionRef: string;
  employeeName: string;
  destination: string;
  dateDebut: string;
  dateFin: string;
  status: 'EN_COURS' | 'PLANIFIE' | 'TERMINE';
}

interface ChauffeurSchedule {
  id: number;
  mle?: string | null;
  nom: string;
  prenom: string;
  telephone: string;
  missions: ChauffeurMission[];
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

  searchQuery = '';
  filterStatus: 'all' | 'en-mission' | 'disponible' = 'all';
  selectedMonth = new Date().toISOString().slice(0, 7); // YYYY-MM

  chauffeurs: ChauffeurSchedule[] = [];

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    // 1. Fetch drivers and missions in parallel or sequentially
    this.chauffeurService.getAll().subscribe({
      next: (drivers) => {
        this.ordreMissionService.getAll().subscribe({
          next: (missions) => {
            this.chauffeurs = drivers.map(d => {
              // Get all missions assigned to this chauffeur
              const chauffeurMissions: ChauffeurMission[] = missions
                .filter(m => m.chauffeurId === d.id && m.statut !== 'ANNULE') // Exclude cancelled ones
                .map(m => {
                  const empName = m.employe ? `${m.employe.prenom} ${m.employe.nom}` : 'N/A';
                  return {
                    missionRef: m.reference,
                    employeeName: empName,
                    destination: m.destination?.nom || 'N/A',
                    dateDebut: m.dateDebut.split('T')[0],
                    dateFin: m.dateFin ? m.dateFin.split('T')[0] : m.dateDebut.split('T')[0],
                    status: m.statut === 'ANNULE' ? 'TERMINE' : m.statut as any // Fallback
                  };
                });

              return {
                id: d.id,
                mle: d.mle,
                nom: d.nom,
                prenom: d.prenom,
                telephone: d.telephone || '',
                missions: chauffeurMissions
              };
            });
            this.cdr.markForCheck();
          },
          error: (err) => console.error('Error fetching missions for schedules:', err)
        });
      },
      error: (err) => console.error('Error fetching drivers for schedules:', err)
    });
  }

  get selectedMonthLabel(): string {
    const [y, m] = this.selectedMonth.split('-');
    const date = new Date(Number(y), Number(m) - 1, 1);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  private missionOverlapsMonth(m: ChauffeurMission): boolean {
    const [y, mo] = this.selectedMonth.split('-').map(Number);
    const monthStart = new Date(y, mo - 1, 1);
    const monthEnd = new Date(y, mo, 0, 23, 59, 59);
    const mStart = new Date(m.dateDebut);
    const mEnd = new Date(m.dateFin);
    return mStart <= monthEnd && mEnd >= monthStart;
  }

  getMissionsForMonth(chauffeur: ChauffeurSchedule): ChauffeurMission[] {
    return chauffeur.missions.filter(m => this.missionOverlapsMonth(m));
  }

  get filteredChauffeurs(): ChauffeurSchedule[] {
    let result = this.chauffeurs;

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(c =>
        c.nom.toLowerCase().includes(q) ||
        c.prenom.toLowerCase().includes(q) ||
        (c.mle && c.mle.includes(q))
      );
    }

    if (this.filterStatus === 'en-mission') {
      result = result.filter(c => this.isCurrentlyOnMission(c));
    } else if (this.filterStatus === 'disponible') {
      result = result.filter(c => !this.isCurrentlyOnMission(c));
    }

    return result;
  }

  get totalMissionsThisMonth(): number {
    return this.chauffeurs.reduce((sum, ch) => sum + this.getMissionsForMonth(ch).length, 0);
  }

  isCurrentlyOnMission(chauffeur: ChauffeurSchedule): boolean {
    return chauffeur.missions.some(m => m.status === 'EN_COURS');
  }

  getCurrentMission(chauffeur: ChauffeurSchedule): ChauffeurMission | null {
    return chauffeur.missions.find(m => m.status === 'EN_COURS') || null;
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'EN_COURS': return 'badge-encours';
      case 'PLANIFIE': return 'badge-valide';
      case 'TERMINE': return 'badge-termine';
      default: return 'badge-valide';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'EN_COURS': return 'En cours';
      case 'PLANIFIE': return 'Planifiée';
      case 'TERMINE': return 'Terminée';
      default: return status;
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  getDurationDays(dateDebut: string, dateFin: string): number {
    const start = new Date(dateDebut);
    const end = new Date(dateFin);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  get totalEnMission(): number {
    return this.chauffeurs.filter(c => this.isCurrentlyOnMission(c)).length;
  }

  get totalDisponible(): number {
    return this.chauffeurs.filter(c => !this.isCurrentlyOnMission(c)).length;
  }

  // ── Print monthly report ──
  printMonthlyReport() {
    const logoUrl = window.location.origin + '/El-mouradi.png';
    const monthLabel = this.selectedMonthLabel;

    // Collect all missions for selected month across all chauffeurs
    const rows = this.chauffeurs.flatMap(ch =>
      this.getMissionsForMonth(ch).map(m => ({
        chauffeurName: `${ch.prenom} ${ch.nom}`,
        chauffeurMle: ch.mle,
        ...m
      }))
    ).sort((a, b) => a.dateDebut.localeCompare(b.dateDebut));

    const tableRows = rows.length > 0
      ? rows.map(r => `
        <tr>
          <td style="font-family: monospace; font-size: 11px; background: #f8f9fc; padding: 2px 6px; border-radius: 3px;">${r.missionRef}</td>
          <td>${r.chauffeurName}${r.chauffeurMle ? ` <span style="color: #8a92a8; font-size: 10px;">(${r.chauffeurMle})</span>` : ''}</td>
          <td>${r.employeeName}</td>
          <td>${r.destination}</td>
          <td>${new Date(r.dateDebut).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} - ${new Date(r.dateFin).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</td>
          <td>${this.getDurationDays(r.dateDebut, r.dateFin)}j</td>
          <td><span style="padding: 2px 8px; border-radius: 100px; font-size: 10px; font-weight: 600;
            background: ${r.status === 'EN_COURS' ? '#fffbeb' : r.status === 'TERMINE' ? '#f0fdf4' : '#eff6ff'};
            color: ${r.status === 'EN_COURS' ? '#d97706' : r.status === 'TERMINE' ? '#16a34a' : '#3b82f6'};">
            ${this.getStatusLabel(r.status)}</span></td>
        </tr>`).join('')
      : '<tr><td colspan="7" style="text-align: center; color: #8a92a8; padding: 30px; font-style: italic;">Aucune mission pour ce mois.</td></tr>';

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Veuillez autoriser les fenêtres pop-up pour imprimer.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Rapport Mensuel Missions Chauffeurs - ${monthLabel}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
          @page { size: A4 landscape; margin: 15mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; font-size: 12px; color: #1a1f36; padding: 20px; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #d4a853; padding-bottom: 12px; margin-bottom: 20px; }
          .header img { height: 50px; }
          .header-title { text-align: right; }
          .header-title h1 { font-size: 16px; font-weight: 700; color: #1a1f36; }
          .header-title p { font-size: 11px; color: #8a92a8; margin-top: 2px; }
          .summary { display: flex; gap: 24px; margin-bottom: 16px; }
          .summary-item { font-size: 12px; color: #4a5168; }
          .summary-item strong { font-weight: 700; color: #1a1f36; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; font-size: 10px; font-weight: 600; color: #8a92a8; letter-spacing: 0.06em; text-transform: uppercase; padding: 8px 10px; background: #f8f9fc; border-bottom: 2px solid #e8eaef; }
          td { padding: 8px 10px; font-size: 11.5px; border-bottom: 1px solid #f0f2f7; }
          .footer { margin-top: 30px; text-align: center; font-size: 10px; color: #8a92a8; border-top: 1px solid #e8eaef; padding-top: 10px; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoUrl}" alt="El Mouradi Hotels" />
          <div class="header-title">
            <h1>Rapport Mensuel - Missions des Chauffeurs</h1>
            <p>${monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1)}</p>
          </div>
        </div>
        <div class="summary">
          <div class="summary-item"><strong>${rows.length}</strong> mission(s) ce mois</div>
          <div class="summary-item"><strong>${new Set(rows.map(r => r.chauffeurMle)).size}</strong> chauffeur(s) mobilisé(s)</div>
          <div class="summary-item"><strong>${rows.reduce((s, r) => s + this.getDurationDays(r.dateDebut, r.dateFin), 0)}</strong> jour(s) de déplacement au total</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Réf.</th>
              <th>Chauffeur</th>
              <th>Accompagnateur</th>
              <th>Destination</th>
              <th>Période</th>
              <th>Durée</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        <div class="footer">
          Rapport généré le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - El Mouradi Hotels - Direction Générale
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  }
}

