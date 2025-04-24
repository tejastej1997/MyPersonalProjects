import { Component, input, output } from '@angular/core';
import { usertasks } from '../shared/commoninterface';
import { WrapperComponent } from "../../employeelist/shared/wrapper/wrapper.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-task',
  standalone: true,
  imports: [WrapperComponent,DatePipe],
  templateUrl: './employee-task.component.html',
  styleUrl: './employee-task.component.less'
})
export class EmployeeTaskComponent {

  employeeTaskDetails = input.required<usertasks>()

  sendingId = output<string>()

  sendId(id: string) {
    this.sendingId.emit(id)
  }

}
