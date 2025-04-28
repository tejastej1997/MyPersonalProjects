import { Component, input, output } from '@angular/core';
import { usertasks } from '../shared/commoninterface';
import { DatePipe } from '@angular/common';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';

@Component({
  selector: 'app-employee-task',
  standalone: true,
  imports: [DatePipe,WrapperComponent],
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
