import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponentComponent } from "./user-component/user-component.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

interface details {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [HeaderComponent, UserComponentComponent, TasksComponent],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.less'
})
export class EmployeelistComponent {

  users: details[] = DUMMY_USERS;
  selectedUserName!: string;
  receivedId: string = '';
  selectedUser(id: string) {
    const userName = this.users.find((e) => id === e.id)
    this.selectedUserName = userName ? userName.name : "";
    this.receivedId = id;
  }

  

}
