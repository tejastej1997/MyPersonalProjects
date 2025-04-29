import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskdetailsService } from '../shared/taskdetails.service';
import { usertasks } from '../shared/commoninterface';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {

  private taskDetails = inject(TaskdetailsService)

  closeDialog = output();
  getUserId = input.required<string>();

  enteredTitle: string = ''
  enteredSummary: string = ''
  enteredDuedate: string = '';


  onClose() {
    this.closeDialog.emit()
  }

  onSubmit(): usertasks[] {
    this.taskDetails.taskDetails.push({
      id: Date.now().toString(),
      userId: this.getUserId(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDuedate.toString()
    })
    this.onClose();
    return this.taskDetails.taskDetails

  }

}
