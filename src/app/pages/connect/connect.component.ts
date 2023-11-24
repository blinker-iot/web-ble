import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BleService } from '../../ble.service';
import { RouterModule } from '@angular/router';
// import { SerialService } from '../../serial.service';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {

  get device() {
    return this.bleService.device
  }

  constructor(
    private bleService: BleService,
    // private serialService: SerialService
  ) { }

  search() {
    this.bleService.searchDevice();
    // this.serialService.searchDevice();
  }

  disconnect() {

  }
}
