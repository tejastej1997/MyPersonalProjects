import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.less'
})
export class UserComponentComponent {

  constructor() {

  }
  users = DUMMY_USERS[randomIndex];


  public get imagePath(): string {
    return 'assets/Images/02_EmployeeList/users/' + this.users.avatar
  }

  getEmployeeInfo() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.users = DUMMY_USERS[randomIndex]
  }


}
