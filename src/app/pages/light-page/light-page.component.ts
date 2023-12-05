import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { ColorPickerComponent } from '../../components/color-picker/colorpicker';
import { WidgetRangeComponent } from '../../components/widget-range/widget-range';
import { BleService } from '../../ble.service';
import { DeviceTitleComponent } from '../../components/device-title/device-title.component';


@Component({
  selector: 'light-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, ColorPickerComponent, WidgetRangeComponent, DeviceTitleComponent],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.scss'
})
export class LightPageComponent {

  constructor(
    private bleService: BleService
  ) {
  }

  color;

  colorChange(e) {
    this.color = `rgb(${e[0]},${e[1]}, ${e[2]})`
    this.bleService.sendData(`rgb:${e[0]},${e[1]},${e[2]}\n`)
  }

  brightnessChange(e) {
    this.bleService.sendData(`brightness:${e}\n`)
  }

  state = 'off'
  turn() {
    if (this.state == 'on') {
      this.state = 'off'
    } else {
      this.state = 'on'
    }
    this.bleService.sendData(`turn:${this.state}\n`)
  }
}
