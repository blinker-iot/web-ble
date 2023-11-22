import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const serial = (navigator as any).serial;

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  port = null;

  dataChanged = new Subject()

  constructor() { }

  async searchDevice() {
    try {
      this.port = await serial.requestPort();
      await this.port.open({ baudRate: 9600 });

      // 发送字符串"Hello Serial"
      const textEncoder = new TextEncoder();
      const data = textEncoder.encode("Hello Serial");
      await this.sendData(data);

    } catch (error) {
      // 处理连接或发送数据时的错误
      console.error('There was an error opening the serial port:', error);
    }
  }



  async sendData(data) {
    const writer = this.port.writable.getWriter();
    await writer.write(data);
    writer.releaseLock();
  }

  handleCharacteristicValueChanged(event) {
    let value = event.target.value;
    let decoder = new TextDecoder();
    let decodedValue = decoder.decode(value);
    console.log(`Received data: ${decodedValue}`);
    this.dataChanged.next(decodedValue);
  }

}
