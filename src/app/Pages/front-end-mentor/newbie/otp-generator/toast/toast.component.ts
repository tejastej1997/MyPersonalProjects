import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.less'
})
export class ToastComponent {

  inputData = input.required<boolean>()
  otp = input.required<number>()

  

  closeToast(){
    
  }
}
