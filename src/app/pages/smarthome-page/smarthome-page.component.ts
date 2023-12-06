import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { CtrlBoxComponent } from '../../components/ctrl-box/ctrl-box.component';
import { InputBoxComponent } from '../../components/input-box/input-box.component';
import { BleService } from '../../ble.service';
import { DeviceTitleComponent } from '../../components/device-title/device-title.component';

@Component({
  selector: 'app-smarthome-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, DataBoxComponent, LineChartComponent,
    InputBoxComponent, CtrlBoxComponent, DeviceTitleComponent],
  templateUrl: './smarthome-page.component.html',
  styleUrl: './smarthome-page.component.scss'
})
export class SmarthomePageComponent {
  items1 = [
    {
      name: '温度',
      icon: 'iconfont icon-temperature',
      unit: '℃',
      key: 'temperature'
    }, {
      name: '湿度',
      icon: 'iconfont icon-humidity',
      unit: '%',
      key: 'humidity'
    }, {
      name: '光照',
      icon: 'iconfont icon-sun',
      unit: 'LX',
      key: 'illuminance'
    }
  ]

  currentItem = this.items1[0]

  items2 = [
    {
      name: 'PM2.5',
      icon: 'iconfont icon-pm',
      unit: 'ug/m³',
      key: 'pm25'
    }, {
      name: '二氧化碳',
      icon: 'iconfont icon-co2',
      unit: 'ppm',
      key: 'co2'
    }
  ]

  items3 = [
    {
      name: '窗户',
      icon: 'iconfont icon-pipe',
      key: 'window',
      state: false
    }, {
      name: '通风',
      icon: 'iconfont icon-fan',
      key: 'fan',
      state: false
    }, {
      name: '补光灯',
      icon: 'iconfont icon-light2',
      key: 'light',
      state: false
    }, {
      name: '开门',
      icon: 'iconfont icon-windmill',
      key: 'door',
      state: false
    }, {
      name: '音乐',
      icon: 'iconfont icon-windmill',
      key: 'music',
      state: false
    }, {
      name: '其他',
      icon: 'iconfont icon-setting',
      key: 'custom',
      state: false
    }
  ]

  constructor(
    private bleService: BleService
  ) {

  }

  selectItem(item) {
    this.currentItem = item
  }

  textChange(text) {
    this.bleService.sendData(`text:${text}\n`)
  }

  stateChange($event) {
    this.bleService.sendData(`${$event.key}:${$event.state ? 'on' : 'off'}\n`)
  }
}
