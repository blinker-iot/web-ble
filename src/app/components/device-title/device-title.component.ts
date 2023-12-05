import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BleService } from '../../ble.service';

@Component({
  selector: 'device-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-title.component.html',
  styleUrl: './device-title.component.scss'
})
export class DeviceTitleComponent {

  get device() {
    return this.bleService.device
  }

  constructor(
    private bleService: BleService
  ) {

  }

  connect() {
    if (!this.device)
      this.bleService.searchDevice()
  }
}
