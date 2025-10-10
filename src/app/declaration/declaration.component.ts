import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecapComponent } from '../recap/recap.component';

@Component({
  selector: 'app-declaration',
  imports: [CommonModule, ReactiveFormsModule, RecapComponent],
  templateUrl: './declaration.component.html',
  styleUrl: './declaration.component.css'
})
export class DeclarationComponent {
  pollutionForm: FormGroup;
  submitted = false;
  pollutionData: any = null;

  types = ['Plastique', 'Chimique', 'Dépôt sauvage', 'Eau', 'Air', 'Autre'];

  constructor(private fb: FormBuilder) {
    this.pollutionForm = this.fb.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required],
      latitude: ['', [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)]],
      longitude: ['', [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)]],
      photo: ['']
    });
  }

  onSubmit(): void {
    if (this.pollutionForm.valid) {
      this.submitted = true;
      this.pollutionData = this.pollutionForm.value;
    } else {
      this.pollutionForm.markAllAsTouched();
    }
  }
}