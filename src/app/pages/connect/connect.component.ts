import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BleService } from '../../ble.service';
import { RouterModule } from '@angular/router';
import { MENU } from '../../configs/app.config';
// import { SerialService } from '../../serial.service';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {

  MENU = MENU

  get device() {
    return this.bleService.device
  }

  constructor(
    private bleService: BleService,
  ) { }

  search() {
    this.bleService.searchDevice();
  }

  disconnect() {
    this.bleService.disconnect();
  }
}
