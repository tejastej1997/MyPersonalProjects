import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponentComponent } from "./user-component/user-component.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [HeaderComponent, UserComponentComponent],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.less'
})
export class EmployeelistComponent {

  userLength = DUMMY_USERS.length;
   indexNumber !: number ;

  changeUser() {
    this.indexNumber = Math.floor(Math.random() * this.userLength)
  }

}
