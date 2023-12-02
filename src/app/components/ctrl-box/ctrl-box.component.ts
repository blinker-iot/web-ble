import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'ctrl-box',
  standalone: true,
  imports: [CommonModule, ToggleComponent],
  templateUrl: './ctrl-box.component.html',
  styleUrl: './ctrl-box.component.scss'
})
export class CtrlBoxComponent {
  @Input() config;

  state = true
}
