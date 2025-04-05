import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [MarkdownModule, RouterLink],
  providers: [DialogService],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.less'
})
export class PreviewComponent {
  dialogReferance: DynamicDialogRef | undefined;
  readonly dialogservice = inject(DialogService);
  readonly dialogConfig = inject(DynamicDialogConfig);
  readonly referance = inject(DynamicDialogRef)

  data: string;
  projectText: string;
  projectPath: string;

  constructor() {
    this.data = this.dialogConfig.data.file;
    this.projectText = this.dialogConfig.data.info;
    this.projectPath = this.dialogConfig.data.projectPath;

  }

  closeModal() {
    this.referance.close()
  }



}
