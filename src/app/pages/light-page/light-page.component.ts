import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';

@Component({
  selector: 'light-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.scss'
})
export class LightPageComponent {

}
