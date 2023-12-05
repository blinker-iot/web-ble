import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'data-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-box.component.html',
  styleUrl: './data-box.component.scss'
})
export class DataBoxComponent {
  @Input() config;

  get value() {
    if (this.config.key in this.dataService.manager) {
      return this.dataService.manager[this.config.key]
    }
    return '-'
  }

  constructor(
    public dataService: DataService
  ) {}
}
