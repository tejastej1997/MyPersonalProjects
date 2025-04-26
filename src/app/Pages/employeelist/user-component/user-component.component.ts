import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { WrapperComponent } from "../shared/wrapper/wrapper.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.less'
})
export class UserComponentComponent {

  constructor() {

  }
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;

  // using signals 

  // avatar = input.required<string>()
  // name = input.required<string>()
  // userId = input.required<string>()

  @Input({ required: true }) receivedDetails!: {
    id: string,
    avatar: string,
    name: string
  }
  selected = input.required<boolean>()

  @Output() userid = new EventEmitter();

  imagePath = computed(() => 'assets/Images/02_EmployeeList/users/' + this.receivedDetails.avatar)

  // public get imagePath(): string {
  //   return 'assets/Images/02_EmployeeList/users/' + this.avatar();
  // }

  // users = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/Images/02_EmployeeList/users/' + this.users().avatar)

  // public get imagePath(): string {
  //   return 'assets/Images/02_EmployeeList/users/' + this.users().avatar;
  // }

  getEmployeeInfo() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // // this.users = DUMMY_USERS[randomIndex]
    // this.users.set(DUMMY_USERS[randomIndex])

    this.userid.emit(this.receivedDetails.id)
  }



}
