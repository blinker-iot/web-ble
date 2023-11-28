import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';

@Component({
  selector: 'app-smarthome-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, DataBoxComponent],
  templateUrl: './smarthome-page.component.html',
  styleUrl: './smarthome-page.component.scss'
})
export class SmarthomePageComponent {

}
