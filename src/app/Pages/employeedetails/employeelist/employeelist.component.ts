import { Component, input } from '@angular/core';
import { employeedetails } from '../shared/commoninterface';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';

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
