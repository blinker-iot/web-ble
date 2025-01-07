import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

const bluetooth = (navigator as any).bluetooth;

@Injectable({
  providedIn: 'root'
})
export class BleService {

  device = null;
  server = null;
  characteristicInstance = null;

  serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb'
  characteristicUUID = '0000ffe1-0000-1000-8000-00805f9b34fb'

  // characteristicUUID_read = '0000ffe1-0000-1000-8000-00805f9b34fb'
  // characteristicUUID_write = '0000ffe1-0000-1000-8000-00805f9b34fb'

  dataChanged = new Subject()

  constructor(
    private dataService: DataService
  ) { }

  browserVersionError = false

  init() {
    if (!bluetooth) {
      console.log('不支持的浏览器');
    }
  }

  searchDevice() {
    bluetooth.requestDevice({
      // acceptAllDevices: true,
      optionalServices: [this.serviceUUID],
      filters: [{ services: [this.serviceUUID] }]
    })
      .then(device => {
        this.device = device;
        // console.log(this.device);
        // console.log(this.device.name);
        return device.gatt.connect();
      })
      .then(server => {
        this.server = server;
        this.device.addEventListener('gattserverdisconnected', (event) => this.onDisconnected(event));
        return server.getPrimaryService(this.serviceUUID);
      })
      .then(service => {
        console.log(service);

        return service.getCharacteristic(this.characteristicUUID);
      })
      .then(characteristic => {
        // console.log(characteristic);
        this.characteristicInstance = characteristic;
        // console.log(this.characteristicInstance);
        this.characteristicInstance.addEventListener('characteristicvaluechanged', (event) => this.handleCharacteristicValueChanged(event));
        this.characteristicInstance.startNotifications();
      })
      .catch(error => {
        console.log(error);
        // this.device = null
      });
  }

  sendData(data) {
    if (!this.characteristicInstance) {
      console.log('No characteristic to write to!');
      return;
    }
    let encoder = new TextEncoder();
    this.characteristicInstance.writeValue(encoder.encode(data))
      .then(() => {
        // console.log(`Data sent: ${data}`);
      })
      .catch(error => {
        // console.log(`Send error: ${error}`);
      });
  }

  tempData = '';
  handleCharacteristicValueChanged(event) {
    let value = event.target.value;
    let decoder = new TextDecoder();
    let decodedValue = decoder.decode(value);
    console.log(`Received data: ${decodedValue}`);

    this.tempData += decodedValue;

    try {
      // 检查是否存在'\n'
      let lastIndex = this.tempData.lastIndexOf('\n');
      if (lastIndex !== -1) {
        // 获取最后一个'\n'前的数据并处理
        let processData = this.tempData.substring(0, lastIndex);
        this.dataService.processData(processData);

        // 保留'\n'后的数据
        this.tempData = this.tempData.substring(lastIndex + 1);
      }
    } catch (error) {

    }
    this.dataChanged.next(decodedValue);
  }

  onDisconnected(event) {
    console.log(`Device ${this.device.name} is disconnected.`);
    this.device = null;
  }

  disconnect() {
    if (this.device) {
      console.log(`Disconnecting from ${this.device.name}...`);
      if (this.device.gatt.connected) {
        this.device.gatt.disconnect();
        console.log(`Device ${this.device.name} is disconnected.`);
      } else {
        console.log(`Device ${this.device.name} is already disconnected.`);
      }
      this.device = null;
    } else {
      console.log('No device is connected.');
    }
  }

}