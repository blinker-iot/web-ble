import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';
import { CtrlBoxComponent } from '../../components/ctrl-box/ctrl-box.component';
import { BleService } from '../../ble.service';
import { InputBoxComponent } from '../../components/input-box/input-box.component';
import { DeviceTitleComponent } from '../../components/device-title/device-title.component';
import { ENVIRON_CONFIG, HEALTH_CONFIG, INDUSTRY_CONFIG, SMARTFARMING_CONFIG, SMARTHOME_CONFIG, WEATHERSTATION_CONFIG } from '../../configs/device.confit';
import { ActivatedRoute } from '@angular/router';
import { BtnBoxComponent } from '../../components/btn-box/btn-box.component';

@Component({
  selector: 'iot-page',
  standalone: true,
  imports: [CommonModule, LineChartComponent, SettingBtnComponent, DataBoxComponent, CtrlBoxComponent,
    InputBoxComponent, BtnBoxComponent, DeviceTitleComponent],
  templateUrl: './iot-page.component.html',
  styleUrl: './iot-page.component.scss'
})
export class IotPageComponent {

  items1 = []

  items3 = []

  currentItem;

  config;

  constructor(
    private bleService: BleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      switch (params['devicename']) {
        case 'smarthome':
          this.config = SMARTHOME_CONFIG
          break;
        case 'weather':
          this.config = WEATHERSTATION_CONFIG
          break;
        case 'farming':
          this.config = SMARTFARMING_CONFIG
          break;
        case 'health':
          this.config = HEALTH_CONFIG
          break;
        case 'environment':
          this.config = ENVIRON_CONFIG
          break;
        case 'industry':
          this.config = INDUSTRY_CONFIG
          break;
        default:
          break;
      }

      this.items1 = []
      this.items3 = []
      this.currentItem = null;

      this.config.widgets.filter(item => item.type == 'number').forEach(item => {
        this.items1.push(item)
      })
      this.config.widgets.filter(item =>
        item.type == 'switch' ||
        item.type === 'input' ||
        item.type === 'button'
      ).forEach(item => {
        this.items3.push(item)
      })
      this.currentItem = this.items1[0]
    });

  }

  selectItem(item) {
    this.currentItem = item
  }

  stateChange($event, item) {
    console.log('stateChange', $event);
    this.bleService.sendData(`${item.key}:${$event ? 'on' : 'off'}\n`)
  }

  textChange(text) {
    this.bleService.sendData(`text:${text}\n`)
  }
}
