import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponentComponent } from "./user-component/user-component.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [HeaderComponent, UserComponentComponent, TasksComponent],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.less'
})
export class EmployeelistComponent {

  users = DUMMY_USERS;
  selectedUserName!: string;
  selectedUser(id: string) {
    const userName = this.users.find((e) => id === e.id)
    this.selectedUserName = userName?.name ?? '';
  }

}
