import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from "./toast/toast.component";


@Component({
  selector: 'app-otp-generator',
  standalone: true,
  imports: [FormsModule, ToastComponent],
  templateUrl: './otp-generator.component.html',
  styleUrl: './otp-generator.component.less'
})
export class OtpGeneratorComponent {

  variable!: number;
  value!: any;
  range !: number;
  display: boolean = false;
  otpDisplay: boolean = false;
  optLength: number[] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  outTime: number = 30;
  displayTime: number = this.outTime;
  toastDiaplay: boolean = false;
  intervalId: any;

  ngOnInit() {

  }


  generateOtp(): number {
    this.variable = Math.random()
    this.value = this.variable.toString().split('.').join('').slice(0, this.range);
    this.otpDisplay = true;

    this.intervalId = setInterval(() => {
      if (this.displayTime > 0) {
        this.displayTime--;
      }
      else {
        this.display = false,
          this.otpDisplay = false;
      }

    }, 1000);

    return this.variable;
  }

  getValue(value: number) {
    this.range = value;
    this.display = true;
    clearInterval(this.intervalId)
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.display = false,
        this.otpDisplay = false;
      this.toastDiaplay = true;
      clearInterval(this.intervalId);

    }).catch((err) => {
      console.log(err);
    })


  }



}
