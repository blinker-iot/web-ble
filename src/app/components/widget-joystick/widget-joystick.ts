import { CommonModule } from '@angular/common';
import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'widget-joystick',
  templateUrl: 'widget-joystick.html',
  styleUrls: ['widget-joystick.scss'],
  imports: [CommonModule],
  standalone: true
})
export class WidgetJoystickComponent {

  gesture;
  @ViewChild("touchZone", { read: ElementRef, static: true }) touchZone: ElementRef;
  @ViewChild("stick", { read: ElementRef, static: true }) stick: ElementRef;
  loaded = false;

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
      let senddata = `JOY:${x},${y}\n`;
      this.sendData(senddata);
      this.oldX = x;
      this.oldY = y;
    }
  }

  panend(event) {
    this.renderer.setStyle(this.stick.nativeElement, 'left', `calc(50% - 35px)`);
    this.renderer.setStyle(this.stick.nativeElement, 'top', `calc(50% - 35px)`);
    let senddata = `JOY:128,128\n`;
    // this.LayouterService.send(senddata);
  }

  canSend = true;
  sendData(senddata) {
    if (this.canSend) {
      // this.LayouterService.send(senddata);
      this.canSend = false;
      window.setTimeout(() => {
        this.canSend = true;
      }, 100);
    }
  }

}
