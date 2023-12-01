import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HammerModule } from '@angular/platform-browser';
import { BleService } from './ble.service';
import { DeviceService } from './device.service';
// import 'hammerjs';
// import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

// declare var Hammer: any;
// @Injectable()
// export class MyHammerConfig extends HammerGestureConfig {
//   override overrides = <any>{
//     'pan': { direction: Hammer.DIRECTION_ALL, threshold: 5 },
//     'press': { time: 300, threshold: 99 }
//   }
// }

const orientation = (screen.orientation as any);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HammerModule],
  // providers: [
  //   { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-ble';

  isH = false;

  get browserVersionError() {
    return this.bleService.browserVersionError
  }

  constructor(
    private router: Router,
    private bleService: BleService,
    private deviceService: DeviceService
  ) {
  }

  ngOnInit(): void {
    this.bleService.init()
    this.deviceService.init()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('NavigationEnd:', event);
        if (event.url == '/joystick') {
          this.isH = true;
        } else {
          this.isH = false;
        }
      }
    })

    window.onload = function () {
      document.addEventListener('contextmenu', function (e) {
        if (e.target['tagName'] === 'IMG') {
          e.preventDefault();
        }
      });
    }
  }
}
