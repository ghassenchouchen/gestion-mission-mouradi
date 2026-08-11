import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';
import { ChauffeurService, Chauffeur } from '../../services/api.service';

@Component({
  selector: 'app-hr-chauffeurs',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chauffeurs.html',
  styleUrl: '../../admin/missions/missions.css' 
})
export class HrChauffeursList implements OnInit {
  private chauffeurService = inject(ChauffeurService);
  private cdr = inject(ChangeDetectorRef);

  chauffeurs: Chauffeur[] = [];
  selectedChauffeurId: string = 'ALL';

  ngOnInit() {
    this.loadChauffeurs();
  }

  loadChauffeurs() {
    this.chauffeurService.getAll().subscribe({
      next: (data) => {
        this.chauffeurs = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error fetching chauffeurs for HR:', err)
    });
  }

  get filteredChauffeurs(): Chauffeur[] {
    if (this.selectedChauffeurId === 'ALL') return this.chauffeurs;
    return this.chauffeurs.filter(c => c.id === Number(this.selectedChauffeurId));
  }
}

