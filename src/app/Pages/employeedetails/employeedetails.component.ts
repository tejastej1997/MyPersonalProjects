import { Component, inject, signal } from '@angular/core';
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { EmployeelistService } from './shared/employeelist.service';
import { employeedetails } from './shared/commoninterface';
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { HeaderComponent } from './header/header.component';
import { AddNewEmployeesComponent } from "./add-new-employees/add-new-employees.component";

@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [EmployeelistComponent, UserdetailsComponent, HeaderComponent, AddNewEmployeesComponent],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.less'
})
export class EmployeedetailsComponent {

  readonly employeeDetails = inject(EmployeelistService)

  constructor() {

  }
  selectedId: string = '';
  selectedUserName: string = '';
  openDialog: boolean = false;


  get employeeInfo(): employeedetails[] {
    return this.employeeDetails.employeeDetails;
  }

  receivedId(id: string) {
    this.employeeDetails.employeeDetails.filter(e => e.id == id).forEach(e => this.selectedUserName = e.name)
    this.selectedId = id;
  }

  addemployees(): boolean {
    return this.openDialog = true;
  }

  closeDialog() {
    this.openDialog = false;
  }

}
