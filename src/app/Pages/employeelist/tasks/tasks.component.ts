import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

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
  newTask : boolean = false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  selectedTask() {
    return this.dummyTasks.filter((e) => e.userId == this.id())
  }

  completeTask(id: string | undefined) {
    this.dummyTasks = this.dummyTasks.filter((e) => e.id != id)
  }

  closeDialog(){
    this.newTask = false;
  }

}
