import { Component, Input } from '@angular/core';
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

  users = DUMMY_USERS;
  selectedUser(id: string) {
    console.log(id);

  }

}
