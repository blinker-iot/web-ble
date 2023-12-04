import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() stateChange = new EventEmitter();

  get state() {
    return this.config.state;
  }

  trunCtrlItem() {
    this.config.state = !this.config.state;
    this.stateChange.emit(this.config.state);
  }

}
