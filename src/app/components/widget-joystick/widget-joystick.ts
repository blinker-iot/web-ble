import { CommonModule } from '@angular/common';
import { Component, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'widget-joystick',
  templateUrl: 'widget-joystick.html',
  styleUrls: ['widget-joystick.scss'],
  imports: [CommonModule],
  standalone: true
})
export class WidgetJoystickComponent {
  @ViewChild("touchZone", { read: ElementRef, static: true }) touchZone: ElementRef;
  @ViewChild("stick", { read: ElementRef, static: true }) stick: ElementRef;

  @Output() valueChange = new EventEmitter();

  constructor(
    private renderer: Renderer2
  ) {
  }

  oldX;
  oldY;
  lastSendTime;
  panmove(event) {
    let _touchZone = this.touchZone.nativeElement.getBoundingClientRect();
    let _stick = this.stick.nativeElement.getBoundingClientRect();
    let r = (_touchZone.width - _stick.width) / 2;
    let x = event.deltaX;
    let y = event.deltaY;
    let resize = r / Math.sqrt((x * x + y * y));
    if (resize > 1) resize = 1;
    let l = r + resize * x;
    let t = r + resize * y;
    x = Math.round((l / r) * 127.5);
    y = Math.round((t / r) * 127.5);
    if (this.oldX != x || this.oldY != y) {
      this.renderer.setStyle(this.stick.nativeElement, 'left', `${(l).toString()}px`);
      this.renderer.setStyle(this.stick.nativeElement, 'top', `${(t).toString()}px`);
      this.senddata = `${x},${y}`;
      // this.sendData(senddata);
      this.oldX = x;
      this.oldY = y;
    }
  }

  panend(event) {
    this.renderer.setStyle(this.stick.nativeElement, 'left', `calc(50% - 35px)`);
    this.renderer.setStyle(this.stick.nativeElement, 'top', `calc(50% - 35px)`);
    this.senddata = `128,128`;
    this.stopSend() 
  }

  timer;
  canSend = true;
  senddata = `128,128`

  panstart(event) {
    this.timer = setInterval(() => {
      this.valueChange.emit(this.senddata)
    }, 100)
  }

  stopSend() {
    this.valueChange.emit(this.senddata)
    clearInterval(this.timer)
  }

}
