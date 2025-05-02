import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-employees',
  standalone: true,
  imports: [],
  templateUrl: './add-new-employees.component.html',
  styleUrl: './add-new-employees.component.less'
})
export class AddNewEmployeesComponent {

  @Output() closeDialog = new EventEmitter<boolean>();

  passValue() {
    this.closeDialog.emit()
  }

}
