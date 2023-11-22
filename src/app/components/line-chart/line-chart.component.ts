import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createChart, IChartApi, ISeriesApi, LineSeriesPartialOptions, UTCTimestamp } from 'lightweight-charts';

@Component({
  selector: 'line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @ViewChild('chart') chartContainer: ElementRef;
  private chart: IChartApi;
  private lineSeries: ISeriesApi<"Line">;
  private data: { time: UTCTimestamp, value: number }[] = [];
  private intervalId: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.offsetWidth,
      // height: 300,
      layout: {
        // background: '#ffffff',
        textColor: 'rgba(33, 56, 77, 1)',
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.7)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.7)',
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const lineSeriesOptions: LineSeriesPartialOptions = {
      // upColor: 'green',
      // downColor: 'red',
      // borderVisible: false,
      // wickVisible: true,
      // crossHairMarkerVisible: true,
      // lineStyle: 0,
      // lineWidth: 2,
      // lineType: 0,
      // color: '#2196F3',
    };

    this.lineSeries = this.chart.addLineSeries(lineSeriesOptions);

    this.intervalId = setInterval(() => this.updateData(), 1000);
  }

  updateData(): void {
    const localTime = new Date();
    const time: UTCTimestamp = Math.floor(localTime.getTime() / 1000) - localTime.getTimezoneOffset() * 60 as UTCTimestamp;
    const value = Math.random() * 100; // Replace with actual sensor data

    this.data.push({ time, value });

    // Keep only last minute data
    while (this.data.length > 0 && (Date.now() / 1000 - this.data[0].time) > 60) {
      this.data.shift();
    }

    this.lineSeries.setData(this.data);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.chart) {
      this.chart.remove();
    }
  }
}
