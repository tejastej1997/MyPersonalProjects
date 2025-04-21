import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskdetailsService } from '../shared/taskdetails.service';

type task = {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less'
})
export class TasksComponent {
  userName = input.required<string>()
  id = input.required<string>()
  newTask: boolean = false;
  receivedData = "";

  constructor(private dummyTasks: TaskdetailsService) { }



  selectedTask() {
    return this.dummyTasks.getTask().filter((e) => e.userId == this.id())
  }

  completeTask(id: string | undefined) {
    this.dummyTasks.dummyTasks = this.dummyTasks.getTask().filter((e) => e.id != id)
  }

  closeDialog() {
    this.newTask = false;
  }

  createTask(receivedData: { title: string, summary: string, date: string }) {
    this.dummyTasks.dummyTasks.push({
      id: new Date().getDate().toString(),
      userId: this.id(),
      title: receivedData.title,
      summary: receivedData.summary,
      dueDate: receivedData.date
    })
    this.newTask = false;
  }

}
