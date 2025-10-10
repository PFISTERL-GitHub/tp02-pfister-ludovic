import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recap',
  imports: [CommonModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css'
})
export class RecapComponent {
  @Input() pollution: any;
}