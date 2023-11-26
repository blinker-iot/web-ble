import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'setting-btn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './setting-btn.component.html',
  styleUrl: './setting-btn.component.scss'
})
export class SettingBtnComponent {

  hideMenu = true;

  turnMenu() {
    this.hideMenu = !this.hideMenu;
  }
}
