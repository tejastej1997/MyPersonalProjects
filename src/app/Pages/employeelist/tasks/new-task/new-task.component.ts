import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {

  closeDialog = output()

  onClose() {
    this.closeDialog.emit()
  
  }


}
