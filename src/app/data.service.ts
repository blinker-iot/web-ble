import { Injectable } from '@angular/core';
import { UTCTimestamp } from 'lightweight-charts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  manager = {}
  managerSeries = {}

  constructor() { }


  processData(data) {
    let entries = data.split('\n'); // 按行拆分
    for (let entry of entries) {
      let [key, value] = entry.split(':'); // 按冒号拆分
      key = key.trim()
      value = value.trim()
      this.manager[key] = value; // 去除可能的空格

      if (isNumeric(value)) {
        const localTime = new Date();
        const time: UTCTimestamp = Math.floor(localTime.getTime() / 1000) - localTime.getTimezoneOffset() * 60 as UTCTimestamp;
        let valueN = Number(value)
        if (this.managerSeries[key]) {
          if (time - this.managerSeries[key][this.managerSeries[key].length - 1].time > 1) {
            this.managerSeries[key].push({ time, value: valueN });
          } else {
            this.managerSeries[key][this.managerSeries[key].length - 1].value = valueN;
          }
          while (this.managerSeries[key].length > 0 && (Date.now() / 1000 - this.managerSeries[key][0].time) > 60) {
            this.managerSeries[key].shift();
          }
        } else {
          this.managerSeries[key] = [{ time, value: valueN }]
        }
      }
    }
  }
}

function isNumeric(str: string): boolean {
  return /^-?\d+(\.\d+)?$/.test(str);
}
