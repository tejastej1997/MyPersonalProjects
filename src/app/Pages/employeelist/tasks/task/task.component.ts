import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {

  passId = output<string | undefined>();

  receivedData = input.required<{
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string
  } | undefined>()

  sendId() {
    this.passId.emit(this.receivedData()?.id)
  }

}
