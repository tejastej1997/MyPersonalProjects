import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {

  @Output() formData = new EventEmitter<{ title: string, summary: string, date: string }>();

  closeDialog = output()
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = "";


  onClose() {
    this.closeDialog.emit()
  }

  onSubmit() {
    this.formData.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }


}
