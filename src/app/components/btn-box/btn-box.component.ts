import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'btn-box',
  standalone: true,
  imports: [CommonModule, ToggleComponent],
  templateUrl: './btn-box.component.html',
  styleUrl: './btn-box.component.scss'
})
export class BtnBoxComponent {
  @Input() config;
  @Output() stateChange = new EventEmitter();

  get state() {
    return this.config.state;
  }

  trunCtrlItem() {
    this.config.state = !this.config.state;
    // this.stateChange.emit(this.config.state);
  }

}
