import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss'
})
export class InputBoxComponent {

  @Output() textChange = new EventEmitter()

  text = "Hello"

  editText() {
    const userInput = window.prompt('请输入要显示的字符',this.text);
    if (userInput !== null) {
      this.text = userInput;
      this.textChange.emit(this.text);
    }
  }
}
