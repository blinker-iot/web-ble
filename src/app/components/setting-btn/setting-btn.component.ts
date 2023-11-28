import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MENU } from '../../configs/app.config';

@Component({
  selector: 'setting-btn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './setting-btn.component.html',
  styleUrl: './setting-btn.component.scss'
})
export class SettingBtnComponent {

  hideMenu = true;
  isH = false;

  MENU = MENU

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    window.addEventListener("orientationchange", () => {
      if (window.orientation === 0) { // Portrait
        console.log("Portrait mode");
        this.isH = false;
      } else if (window.orientation === 90 || window.orientation === -90) { // Landscape
        console.log("Landscape mode");
        this.isH = true;
      }
    }, false);
    if (this.router.url === '/joystick') {
      this.isH = true;
    }
  }

  turnMenu() {
    this.hideMenu = !this.hideMenu;
  }
}
