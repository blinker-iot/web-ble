import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { CtrlBoxComponent } from '../../components/ctrl-box/ctrl-box.component';
import { InputBoxComponent } from '../../components/input-box/input-box.component';
import { BleService } from '../../ble.service';

@Component({
  selector: 'app-smarthome-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, DataBoxComponent, LineChartComponent, InputBoxComponent, CtrlBoxComponent],
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
      key: 'light'
    }
  ]

  currentName = this.items1[0].name

  items2 = [
    {
      name: 'PM2.5',
      icon: 'iconfont icon-pm',
      unit: 'ug/m³',
      key: 'pressure'
    }, {
      name: '二氧化碳',
      icon: 'iconfont icon-co2',
      unit: 'ppm',
      key: 'windSpeed'
    }
  ]

  items3 = [
    {
      name: '灌溉',
      icon: 'iconfont icon-pipe',
      key: 'irrigation',
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
      name: '风车',
      icon: 'iconfont icon-windmill',
      key: 'windmill',
      state: false
    }, {
      name: '其他功能',
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
    this.currentName = item.name
  }

  textChange(text) {
    this.bleService.sendData(`text:${text}\n`)
  }

  stateChange($event) {
    this.bleService.sendData(`${$event.key}:${$event.state ? 'on' : 'off'}\n`)
  }
}
