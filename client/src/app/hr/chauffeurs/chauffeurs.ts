import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
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

  chauffeurs: Chauffeur[] = [];
  searchQuery = '';

  ngOnInit() {
    this.loadChauffeurs();
  }

  loadChauffeurs() {
    this.chauffeurService.getAll().subscribe({
      next: (data) => this.chauffeurs = data,
      error: (err) => console.error('Error fetching chauffeurs for HR:', err)
    });
  }

  get filteredChauffeurs(): Chauffeur[] {
    if (!this.searchQuery) return this.chauffeurs;
    const q = this.searchQuery.toLowerCase();
    return this.chauffeurs.filter(c => 
      c.nom.toLowerCase().includes(q) || 
      c.prenom.toLowerCase().includes(q) || 
      (c.mle && c.mle.toLowerCase().includes(q))
    );
  }
}

