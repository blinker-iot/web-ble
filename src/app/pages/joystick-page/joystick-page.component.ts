import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { BleService } from '../../ble.service';
import { WidgetJoystickComponent } from '../../components/widget-joystick/widget-joystick';
import { DeviceService } from '../../device.service';
@Component({
  selector: 'app-joystick-page',
  standalone: true,
  imports: [CommonModule, HammerModule, SettingBtnComponent, WidgetJoystickComponent,HammerModule],
  templateUrl: './joystick-page.component.html',
  styleUrl: './joystick-page.component.scss'
})
export class JoystickPageComponent {

  private keydownHandler: any;

  constructor(
    private bleService: BleService,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {

    if (this.deviceService.isPC) {
      this.keydownHandler = function (event) {
        console.log('按键字母：', event.key);
      }
      window.addEventListener('keydown', this.keydownHandler);
    }
  }

  ngOnDestroy() {
    // 当离开页面时，移除键盘输入事件监听器
    window.removeEventListener('keydown', this.keydownHandler);
  }

  sendData(data) {
    console.log(data);
    this.bleService.sendData(data)
  }

  press(data) {

  }

  pressup(data) {

  }
}
