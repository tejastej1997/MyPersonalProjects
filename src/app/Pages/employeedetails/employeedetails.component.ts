import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { EmployeelistService } from './shared/employeelist.service';
import { employeedetails } from './shared/commoninterface';
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [HeaderComponent, EmployeelistComponent, UserdetailsComponent],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.less'
})
export class EmployeedetailsComponent {

  readonly employeeDetails = inject(EmployeelistService)

  constructor() {

  }
  selectedId: string = '';
  selectedUserName: string = '';


  get employeeInfo(): employeedetails[] {
    return this.employeeDetails.employeeDetails;
  }

  receivedId(id: string) {
    this.employeeDetails.employeeDetails.filter(e => e.id == id).forEach(e => this.selectedUserName = e.name)
    this.selectedId = id;
  }

}
