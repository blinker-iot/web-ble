import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { BleService } from '../../ble.service';
import { WidgetJoystickComponent } from '../../components/widget-joystick/widget-joystick';
import { DeviceService } from '../../device.service';
@Component({
  selector: 'app-joystick-page',
  standalone: true,
  imports: [CommonModule, HammerModule, SettingBtnComponent, WidgetJoystickComponent, HammerModule],
  templateUrl: './joystick-page.component.html',
  styleUrl: './joystick-page.component.scss'
})
export class JoystickPageComponent {

  private keydownHandler: any;

  constructor(
    private bleService: BleService,
    private deviceService: DeviceService,
    private render: Renderer2,
  ) { }

  ngOnInit() {

    if (this.deviceService.isPC) {
      this.keydownHandler = function (event) {
        console.log('按键字母：', event.key);
      }
      window.addEventListener('keydown', this.keydownHandler);
    }
  }

  ngAfterViewInit() {
    this.listenGesture();
  }

  ngOnDestroy() {
    this.unlistenGesture();
    // 当离开页面时，移除键盘输入事件监听器
    window.removeEventListener('keydown', this.keydownHandler);
  }

  valueChange(e) {
    this.bleService.sendData(`joy:${e}\n`)
  }

  timer1;
  timer2;
  timer3;
  timer4;
  startSend(btn) {
    console.log('startSend：', btn);
    
    switch (btn) {
      case 'B1':
        if (!this.timer1) {
          navigator.vibrate(100);
          this.timer1 = setInterval(() => {
            this.bleService.sendData(`${btn}:press\n`)
          }, 100)
        }
        break;
      case 'B2':
        if (!this.timer2)
          this.timer2 = setInterval(() => {
            this.bleService.sendData(`${btn}:press\n`)
          }, 100)
        break;
      case 'B3':
        if (!this.timer3)
          this.timer3 = setInterval(() => {
            this.bleService.sendData(`${btn}:press\n`)
          }, 100)
        break;
      case 'B4':
        if (!this.timer4)
          this.timer4 = setInterval(() => {
            this.bleService.sendData(`${btn}:press\n`)
          }, 100)
        break;
      default:
        break;
    }
  }

  stopSend(btn) {
    console.log('stopSend', btn);
    switch (btn) {
      case 'B1':
        this.bleService.sendData(`${btn}:pressup\n`)
        clearInterval(this.timer1)
        this.timer1 = null
        break;
      case 'B2':
        this.bleService.sendData(`${btn}:pressup\n`)
        clearInterval(this.timer2)
        this.timer2 = null
        break;
      case 'B3':
        this.bleService.sendData(`${btn}:pressup\n`)
        clearInterval(this.timer3)
        this.timer3 = null
        break;
      case 'B4':
        this.bleService.sendData(`${btn}:pressup\n`)
        clearInterval(this.timer4)
        this.timer4 = null
        break;
      default:
        break;
    }
  }

  tap(btn){
    this.bleService.sendData(`${btn}:press\n`)
  }

  // 修复手指移动后无法触发pressup的问题
  @ViewChild("button1", { read: ElementRef, static: true }) button1: ElementRef;
  @ViewChild("button2", { read: ElementRef, static: true }) button2: ElementRef;
  @ViewChild("button3", { read: ElementRef, static: true }) button3: ElementRef;
  @ViewChild("button4", { read: ElementRef, static: true }) button4: ElementRef;
  mouseupEvent1;
  touchendEvent1;
  mouseupEvent2;
  touchendEvent2;
  mouseupEvent3;
  touchendEvent3;
  mouseupEvent4;
  touchendEvent4;
  listenGesture() {
    this.mouseupEvent1 = this.render.listen(this.button1.nativeElement, 'mouseup', e => this.stopSend('B1'));
    this.touchendEvent1 = this.render.listen(this.button1.nativeElement, 'touchend', e => this.stopSend('B1'));
    this.mouseupEvent2 = this.render.listen(this.button2.nativeElement, 'mouseup', e => this.stopSend('B2'));
    this.touchendEvent2 = this.render.listen(this.button2.nativeElement, 'touchend', e => this.stopSend('B2'));
    this.mouseupEvent3 = this.render.listen(this.button3.nativeElement, 'mouseup', e => this.stopSend('B3'));
    this.touchendEvent3 = this.render.listen(this.button3.nativeElement, 'touchend', e => this.stopSend('B3'));
    this.mouseupEvent4 = this.render.listen(this.button4.nativeElement, 'mouseup', e => this.stopSend('B4'));
    this.touchendEvent4 = this.render.listen(this.button4.nativeElement, 'touchend', e => this.stopSend('B4'));
  }

  unlistenGesture() {
    this.mouseupEvent1();
    this.touchendEvent1();
    this.mouseupEvent2();
    this.touchendEvent2();
    this.mouseupEvent3();
    this.touchendEvent3();
    this.mouseupEvent4();
    this.touchendEvent4();
  }
}
