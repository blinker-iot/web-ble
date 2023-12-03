import { Component, ElementRef, EventEmitter, Injectable, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

declare var Hammer: any;

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    'pan': { direction: Hammer.DIRECTION_ALL, threshold: 5 },
    'press': { time: 300, threshold: 99 }
  }
}

@Component({
  selector: 'widget-range',
  templateUrl: 'widget-range.html',
  styleUrls: ['widget-range.scss'],
  standalone: true,
  imports: [
    CommonModule, HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
})
export class WidgetRangeComponent {


  @Output() valueChange = new EventEmitter();

  get tex() {
    return '亮度'
  }

  // @ViewChild('rangebox', { read: ElementRef, static: true }) rangebox: ElementRef;

  showValue = 0;
  // set value(value) {
  //   if (typeof this.device.data[this.key] == 'undefined')
  //     this.device.data[this.key] = {};
  //   this.device.data[this.key]['val'] = value;
  // }

  // get value() {
  //   return this.getValue('val')
  // }

  value = 0;

  get max() {
    return 255
  }

  get min() {
    return 0
  }

  @Input() color;

  get color2() {
    return convertToRgba(this.color, 0.3)
  }

  textBoxWidth = '300px'

  constructor(
    private renderer: Renderer2
  ) {
  }

  timer;
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      if (!this.isMoving) {
        this.processValue();
      }
    }, 1000)
    this.refresh()
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

  canSend = true;
  sendData(senddata) {
    // this.layouterService.send(`{"${this.key}":${senddata}}\n`);
    this.valueChange.emit(this.value)
  }

  refresh() {
    setTimeout(() => {
      // this.boxPadding = `0 ${this.gridSize - 32}px`
      // setTimeout(() => {
      this.textBoxWidth = `${this.bar.nativeElement.clientWidth}px`
      // }, 100)
    })
  }

  @ViewChild("bar", { read: ElementRef, static: true }) bar: ElementRef;
  @ViewChild("barActive", { read: ElementRef, static: true }) activeBar: ElementRef;

  @Input() direction = 'x';

  @Input()
  get length() {
    if (this.direction == 'x') {
      return this.bar.nativeElement.clientWidth;
    }
  }

  isMoving = false

  oldInputValue;
  // _value;
  // @Input()
  // set value(value) {
  //   if (value > this.max) value = this.max;
  //   if (value < this.min) value = this.min;
  //   this._value = value;
  // };

  // get value() {
  //   return this._value;
  // }

  // @Output() valueChange = new EventEmitter();

  _disabled = false;
  @Input()
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }

  _barColor = '#389BEE'
  @Input()
  set barcolor(color) {
    if (color[0] != '#' && color[0] != 'r' && color[0] != 'l') color = '#' + color;
    this.renderer.setStyle(this.bar.nativeElement, 'background', color);
    this._barColor = color;
  }
  get barcolor() {
    return this._barColor;
  }

  _activebarColor = '#389BEE'
  @Input()
  set activecolor(color) {
    if (color[0] != '#' && color[0] != 'r') color = '#' + color;
    this.renderer.setStyle(this.activeBar.nativeElement, 'background', color);
    this._activebarColor = color;
  }
  get activecolor() {
    return this._activebarColor;
  }

  processValue() {
    if (this.oldInputValue != this.value) {
      let x = (this.value - this.min) / (this.max - this.min) * this.length;
      this.renderer.setStyle(this.activeBar.nativeElement, 'transition', `width 0.5s`);
      this.moveSlider(x);
      setTimeout(() => {
        this.renderer.removeStyle(this.activeBar.nativeElement, 'transition');
      }, 500);
      this.oldInputValue = this.value;
    }
  }

  moveSlider(move) {
    let barActiveScale = (move / this.length * 100);
    if (this.direction == 'x') {
      this.renderer.setStyle(this.activeBar.nativeElement, 'width', `${barActiveScale.toString()}%`);
    }
    this.value = Math.round(move / this.length * (this.max - this.min) + this.min);
  }

  tapEvent(e) {
    this.renderer.removeStyle(this.activeBar.nativeElement, 'transition');
    let move;
    if (this.direction == 'x') {
      let p = e.target.getBoundingClientRect().left;
      move = e.center.x - p - 10;
    }
    move = this.checkLimit(move);
    this.moveSlider(move);
    this.pick('tap');
  }

  panstartEvent(e) {
    this.renderer.removeStyle(this.activeBar.nativeElement, 'transition');
    this.isMoving = true;
    let move;
    if (this.direction == 'x') {
      let p = e.target.getBoundingClientRect().left;
      move = e.center.x - p - 10;
    }
    move = this.checkLimit(move)
    this.moveSlider(move);
  }

  lastSendTime = 0;
  panmoveEvent(e) {
    let move;
    if (this.direction == 'x') {
      let p = e.target.getBoundingClientRect().left;
      move = e.center.x - p - 10;
    }
    move = this.checkLimit(move)
    this.moveSlider(move);
    this.pick('end');
  }

  panendEvent(e) {
    this.isMoving = false;
    // this.pick('end');
  }

  oldValue: number;
  pick(state = 'move') {
    if (this.value != this.oldValue) {
      this.oldValue = this.value;
      // this.valueChange.emit(this.value);
    }
    if (state == 'end' || state == 'tap') {
      this.sendData(this.value)
    }
  }

  checkLimit(move) {
    if (move > this.length) {
      move = this.length;
    } else if (move < 0) {
      move = 0;
    }
    return move;
  }
}

export function convertToRgba(cssColorString, opacity) {
  var div = document.createElement('div');
  div.style.color = cssColorString;
  document.body.appendChild(div);

  var colors = window.getComputedStyle(div).color.match(/\d+/g).map(function (a) { return parseInt(a, 10); });

  document.body.removeChild(div);

  return 'rgba(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ', ' + opacity + ')';
}