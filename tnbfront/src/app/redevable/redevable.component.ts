import { Component, OnInit } from '@angular/core';
import { RedevableService } from '../services/redevable.service';
import { Redevable } from '../models/redevable';

@Component({
  selector: 'app-redevable',
  templateUrl: './redevable.component.html',
  styleUrls: ['./redevable.component.css']
})
export class RedevableComponent implements OnInit {
  redevables: Redevable[] = [];
  showAddRedevableModal: boolean = false;
  newRedevable: Redevable = { nom: '', prenom: '', cin: '' };

  showUpdateRedevableModal: boolean = false;
  selectedRedevable: Redevable = { nom: '', prenom: '', cin: '' };

  constructor(private redevableService: RedevableService) { }

  ngOnInit(): void {
    this.loadRedevables();
  }

  openUpdateRedevableModal(redevable: Redevable): void {
    this.selectedRedevable = { ...redevable };
    this.showUpdateRedevableModal = true;
  }

  closeUpdateRedevableModal(): void {
    this.showUpdateRedevableModal = false;
    this.selectedRedevable = { nom: '', prenom: '', cin: '' };
  }

  loadRedevables(): void {
    this.redevableService.getRedevables().subscribe(
      (data) => {
        this.redevables = data;
        console.log('Redevables:', this.redevables);
      },
      (error) => {
        console.error('Error fetching redevables:', error);
      }
    );
  }

  deleteRedevable(redevableId?: number): void {
    this.redevableService.deleteRedevable(redevableId).subscribe(
      () => {
        console.log('Redevable deleted successfully.');
        this.loadRedevables();
      },
      (error) => {
        console.error('Error deleting redevable:', error);
      }
    );
  }

  updateRedevable(): void {
    this.redevableService.updateRedevable(this.selectedRedevable).subscribe(
      () => {
        console.log('Redevable updated successfully.');
        this.loadRedevables();
        this.closeUpdateRedevableModal();
      },
      (error) => {
        console.error('Error updating redevable:', error);
      }
    );
  }

  openAddRedevableModal(): void {
    this.showAddRedevableModal = true;
  }

  closeAddRedevableModal(): void {
    this.showAddRedevableModal = false;
  }

  addRedevable(): void {
    this.redevableService.addRedevable(this.newRedevable).subscribe(
      () => {
        console.log('Redevable added successfully.');
        this.loadRedevables();
        this.closeAddRedevableModal();
        this.newRedevable = { nom: '', prenom: '', cin: '' };
      },
      (error) => {
        console.error('Error adding redevable:', error);
      }
    );
  }
}

