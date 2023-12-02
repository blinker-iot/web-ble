import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';

@Component({
  selector: 'app-farming-page',
  standalone: true,
  imports: [CommonModule, LineChartComponent, SettingBtnComponent, DataBoxComponent],
  templateUrl: './farming-page.component.html',
  styleUrl: './farming-page.component.scss'
})
export class FarmingPageComponent {
  items = [
    {
      name: '环境温度',
      icon: 'iconfont icon-temperature',
      unit: '℃',
      key: 'temperature'
    }, {
      name: '空气湿度',
      icon: 'iconfont icon-humidity',
      unit: '%',
      key: 'humidity'
    }, {
      name: '光照',
      icon: 'iconfont icon-sun',
      unit: 'LX',
      key: 'light'
    }, {
      name: '气压',
      icon: 'iconfont icon-pressure',
      unit: 'pa',
      key: 'pressure'
    }, {
      name: '风向',
      icon: 'iconfont icon-wind-direction',
      unit: '°',
      key: 'windDirection'
    }, {
      name: '风速',
      icon: 'iconfont icon-wind-speed',
      unit: 'm/s',
      key: 'windSpeed'
    }, {
      name: '水质',
      icon: 'iconfont icon-water',
      unit: 'mg/L',
      key: 'waterQuality'
    }, {
      name: '降雨量',
      icon: 'iconfont icon-rainfall',
      unit: 'mm/h',
      key: 'rainfall'
    }
  ]

  items2 = [
    {
      name: '灌溉',
      icon: 'iconfont icon-pipe',
      key: 'irrigation'
    }, {
      name: '通风',
      icon: 'iconfont icon-fan',
      key: 'fan'
    }, {
      name: '补光灯',
      icon: 'iconfont icon-light2',
      key: 'light'
    }, {
      name: '风车',
      icon: 'iconfont icon-windmill',
      key: 'windmill'
    }, {
      name: '功能1',
      icon: 'iconfont icon-setting',
      key: 'c1'
    }, {
      name: '功能2',
      icon: 'iconfont icon-setting',
      key: 'c2'
    }
  ]
}
