import { Component, inject, input } from '@angular/core';
import { EmployeelistService } from '../shared/employeelist.service';
import { WrapperComponent } from "../shared/wrapper/wrapper.component";
import { employeedetails } from '../shared/commoninterface';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.less'
})
export class EmployeelistComponent {

  employeeDetails = input.required<employeedetails>()

  get imagePath(): string {
    return 'assets/Images/02_EmployeeList/users/'
  }

}
