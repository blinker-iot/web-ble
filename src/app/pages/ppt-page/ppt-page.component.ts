import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { ColorPickerComponent } from '../../components/color-picker/colorpicker';
import { WidgetRangeComponent } from '../../components/widget-range/widget-range';
import { BleService } from '../../ble.service';
import { DeviceTitleComponent } from '../../components/device-title/device-title.component';


@Component({
  selector: 'ppt-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, ColorPickerComponent, WidgetRangeComponent, DeviceTitleComponent],
  templateUrl: './ppt-page.component.html',
  styleUrl: './ppt-page.component.scss'
})
export class PptPageComponent {

  constructor(
    private bleService: BleService
  ) {
  }

  send(data) {
    this.bleService.sendData(data + '\n');
  }
}
