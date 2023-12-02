import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ToggleComponent implements OnInit {

  @Input() color = "#389bee";
  @Input() switch: any = true
  @Output() stateChange = new EventEmitter()

  constructor() { }

  ngOnInit() { }

}
