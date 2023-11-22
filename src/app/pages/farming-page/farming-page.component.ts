import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';

@Component({
  selector: 'app-farming-page',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './farming-page.component.html',
  styleUrl: './farming-page.component.scss'
})
export class FarmingPageComponent {

}
