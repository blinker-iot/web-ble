import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'data-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-box.component.html',
  styleUrl: './data-box.component.scss'
})
export class DataBoxComponent {
  @Input() config;

  constructor() {

  }
}
