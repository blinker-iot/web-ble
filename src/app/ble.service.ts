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

  searchDevice() {
    bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: [this.serviceUUID]
    })
      .then(device => {
        this.device = device;
        return device.gatt.connect();
      })
      .then(server => {
        this.server = server;
        return server.getPrimaryService(this.serviceUUID);
      })
      .then(service => {
        return service.getCharacteristic(this.characteristicUUID);
      })
      .then(characteristic => {
        this.characteristicInstance = characteristic;
        this.characteristicInstance.addEventListener('characteristicvaluechanged', (event) => this.handleCharacteristicValueChanged(event));
        this.characteristicInstance.startNotifications();
      })
      .catch(error => {
        console.log(error);
      });
  }

  sendData(data) {
    if (this.characteristicInstance) {
      console.log('No characteristic to write to!');
      return;
    }
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
