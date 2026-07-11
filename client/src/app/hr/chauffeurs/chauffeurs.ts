import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';

interface Chauffeur {
  id: number;
  mle: string;
  nom: string;
  prenom: string;
  telephone: string;
  disponible: boolean;
}

@Component({
  selector: 'app-hr-chauffeurs',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chauffeurs.html',
  styleUrl: '../../admin/missions/missions.css' // Reusing missions table CSS directly
})
export class HrChauffeursList {
  chauffeurs: Chauffeur[] = [
    { id: 1, mle: '1041', nom: 'Jlassi', prenom: 'Hedi', telephone: '+216 98 123 456', disponible: true },
    { id: 2, mle: '1042', nom: 'Amdouni', prenom: 'Kais', telephone: '+216 97 654 321', disponible: true },
    { id: 3, mle: '3981', nom: 'Mejri', prenom: 'Salah', telephone: '+216 95 333 444', disponible: false }
  ];

  searchQuery = '';

  get filteredChauffeurs(): Chauffeur[] {
    if (!this.searchQuery) return this.chauffeurs;
    const q = this.searchQuery.toLowerCase();
    return this.chauffeurs.filter(c => 
      c.nom.toLowerCase().includes(q) || 
      c.prenom.toLowerCase().includes(q) || 
      c.mle.toLowerCase().includes(q)
    );
  }
}
