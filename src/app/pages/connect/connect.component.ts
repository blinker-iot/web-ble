import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BleService } from '../../ble.service';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {
  constructor(
    private bleService: BleService
  ) { }

  search() {
    this.bleService.searchDevice();
  }
}
