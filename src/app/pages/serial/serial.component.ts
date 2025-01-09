import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceTitleComponent } from '../../components/device-title/device-title.component';
import { BleService } from '../../ble.service';
import { FormsModule } from '@angular/forms';
import { HtmlPipe } from '../../pipes/html.pipe';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';

@Component({
  selector: 'app-serial',
  standalone: true,
  imports: [
    CommonModule,
    DeviceTitleComponent,
    FormsModule,
    HtmlPipe,
    SettingBtnComponent
  ],
  templateUrl: './serial.component.html',
  styleUrl: './serial.component.scss'
})
export class SerialComponent {


  value;

  data = '';

  get dataChanged() {
    return this.bleService.dataChanged;
  }

  constructor(
    private bleService: BleService
  ) {
  }

  send() {
    this.bleService.sendData(this.value);
  }

  ngAfterViewInit(): void {
    this.bleService.dataChanged.subscribe(data => {
      this.data = this.data + data;
    });
  }

}
