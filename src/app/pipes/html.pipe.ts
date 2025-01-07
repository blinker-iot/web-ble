import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'html',
  standalone: true,
})
export class HtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(data) {
    // 将字符串中的\n替换为<br>
    data = data.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

}
