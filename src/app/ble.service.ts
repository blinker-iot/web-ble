import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  dataChanged = new Subject()

  constructor() { }

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
        console.log(this.device);
        console.log(this.device.name);
        return device.gatt.connect();
      })
      .then(server => {
        this.server = server;
        return server.getPrimaryService(this.serviceUUID);
      })
      .then(service => {
        console.log(service);

        return service.getCharacteristic(this.characteristicUUID);
      })
      .then(characteristic => {
        console.log(characteristic);
        this.characteristicInstance = characteristic;
        console.log(this.characteristicInstance);

        this.characteristicInstance.addEventListener('characteristicvaluechanged', (event) => this.handleCharacteristicValueChanged(event));
        this.characteristicInstance.startNotifications();
      })
      .catch(error => {
        console.log(error);
      });
  }

  sendData(data) {
    if (!this.characteristicInstance) {
      console.log('No characteristic to write to!');
      return;
    }
    console.log(this.characteristicInstance);

    let encoder = new TextEncoder();
    this.characteristicInstance.writeValue(encoder.encode(data))
      .then(() => {
        console.log(`Data sent: ${data}`);
      })
      .catch(error => {
        console.log(`Send error: ${error}`);
      });
  }

  handleCharacteristicValueChanged(event) {
    let value = event.target.value;
    let decoder = new TextDecoder();
    let decodedValue = decoder.decode(value);
    console.log(`Received data: ${decodedValue}`);
    this.dataChanged.next(decodedValue);
  }

}
