import { Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.less'
})
export class PreviewComponent {
  constructor() {

  }

  @Input() receivedOutput: string = ''
  @Input() projectText : string=''
}
