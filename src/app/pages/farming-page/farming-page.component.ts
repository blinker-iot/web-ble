import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { DataBoxComponent } from '../../components/data-box/data-box.component';

@Component({
  selector: 'app-farming-page',
  standalone: true,
  imports: [CommonModule, LineChartComponent, SettingBtnComponent, DataBoxComponent],
  templateUrl: './farming-page.component.html',
  styleUrl: './farming-page.component.scss'
})
export class FarmingPageComponent {

}
