import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
@Component({
  selector: 'app-joystick-page',
  standalone: true,
  imports: [CommonModule, HammerModule, SettingBtnComponent],
  templateUrl: './joystick-page.component.html',
  styleUrl: './joystick-page.component.scss'
})
export class JoystickPageComponent {

  private keydownHandler: any;

  ngOnInit() {
    // 检查是否是PC访问
    var isPC = function () {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
      }
      return flag;
    }

    // 如果是PC访问，添加键盘输入事件监听器
    if (isPC()) {
      this.keydownHandler = function (event) {
        console.log('按键字母：', event.key);
      }
      window.addEventListener('keydown', this.keydownHandler);
    }
  }

  ngOnDestroy() {
    // 当离开页面时，移除键盘输入事件监听器
    window.removeEventListener('keydown', this.keydownHandler);
  }
}
