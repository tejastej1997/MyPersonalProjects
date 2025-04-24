import { Component, inject, input } from '@angular/core';
import { TaskdetailsService } from '../shared/taskdetails.service';
import { usertasks } from '../shared/commoninterface';
import { EmployeeTaskComponent } from "../employee-task/employee-task.component";
import { NewTaskComponent } from "../../employeedetails/new-task/new-task.component";

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [EmployeeTaskComponent, NewTaskComponent],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.less'
})
export class UserdetailsComponent {

  constructor() {


  }

  receivedId = input.required<string>()
  userName = input.required<string>();

  openDialog: boolean = false;

  // receivedDetails = input<{ id: string, name: string } >()

  private userTaskDetails = inject(TaskdetailsService)

  getUserTask(): usertasks[] {
    const taskDetails = this.userTaskDetails.taskDetails.filter(e => e.userId === this.receivedId());
    return taskDetails;
  }

  completedTaskId(id: string) {
    const index = this.userTaskDetails.taskDetails.findIndex(_ => _.userId == id)
    this.userTaskDetails.taskDetails.splice(index, 1);
  }

  addTask(): boolean {
    this.openDialog = true;
    return this.openDialog;
  }

  closeDialog() {
    this.openDialog = false;
  }

}
