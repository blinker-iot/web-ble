import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingBtnComponent } from '../../components/setting-btn/setting-btn.component';
import { ColorPickerComponent } from '../../components/color-picker/colorpicker';
import { WidgetRangeComponent } from '../../components/widget-range/widget-range';


@Component({
  selector: 'light-page',
  standalone: true,
  imports: [CommonModule, SettingBtnComponent, ColorPickerComponent, WidgetRangeComponent],
  templateUrl: './light-page.component.html',
  styleUrl: './light-page.component.scss'
})
export class LightPageComponent {

}
