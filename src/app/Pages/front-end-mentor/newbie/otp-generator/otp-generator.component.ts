import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-generator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-generator.component.html',
  styleUrl: './otp-generator.component.less'
})
export class OtpGeneratorComponent {

  variable!: number;
  value!: any;
  range !: number;
  display: boolean = false;
  otpDisplay: boolean = false;

  generateOtp(): number {
    this.variable = Math.random()
    this.value = this.variable.toString().split('.').join('').slice(0, this.range);
    this.otpDisplay = true;
    return this.variable;
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`copied text is ${{ text }} `)

    }).catch((err) => {
      console.log(err);

    })
  }

}
