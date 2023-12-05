import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createChart, IChartApi, ISeriesApi, LineSeriesPartialOptions, UTCTimestamp } from 'lightweight-charts';
import { DataService } from '../../data.service';

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
  // private data: { time: UTCTimestamp, value: number }[] = [];
  private intervalTimer: any;


  @Input() config;

  get value() {
    if (this.config.key in this.dataService.manager) {
      return this.dataService.manager[this.config.key]
    }
    return null
  }

  constructor(
    public dataService: DataService
  ) { }

  ngAfterViewInit(): void {
    // this.darwChart()
  }

  ngOnDestroy(): void {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
    }
    if (this.chart) {
      this.chart.remove();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      // this.darwChart()
      // 清空数据，重新记录
    }
  }

  initd = false;
  ngDoCheck() {
    if (this.value !== null && !this.initd) {
      this.initd = true;
      setTimeout(() => {
        this.darwChart();
      }, 500)
    }
  }

  darwChart() {
    console.log('darwChart');
    if (this.chart) {
      this.chart.remove();
    }
    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.offsetWidth,
      layout: {
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
    const lineSeriesOptions: LineSeriesPartialOptions = {};
    this.lineSeries = this.chart.addLineSeries(lineSeriesOptions);

    this.intervalTimer = setInterval(() => this.updateData(), 1000);
    console.log(this.intervalTimer);
  }

  // oldValue;
  updateData() {
    let data = this.dataService.managerSeries[this.config.key]
    if (data.length == 0)
      this.lineSeries.setData([]);
    else {
      const localTime = new Date();
      const time: UTCTimestamp = Math.floor(localTime.getTime() / 1000) - localTime.getTimezoneOffset() * 60 as UTCTimestamp;
      if (time - data[data.length - 1].time > 1) {
        data.push({ time, value: data[data.length - 1].value });
      }
      try {
        this.lineSeries.setData(data);
      } catch (e) {
        console.log(e);
        console.log(data);
      }
    }

  }
}
