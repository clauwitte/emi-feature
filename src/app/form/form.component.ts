import {Component} from '@angular/core';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {FormServiceService} from './form-service.service';

@Component({
  selector: 'app-form',
  imports: [
    MatFormField,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  standalone: true,
  styleUrl: './form.component.css'
})
export class FormComponent {
  output: number = 0.00
  isError: boolean = false
  erroMessage: string = ''
  loanValue = new FormControl(0);
  interestRate = new FormControl(0);
  loanTerm = new FormControl(0);

  constructor(private readonly service: FormServiceService) {
  }

  calculate() {
    this.service.calculate(this.loanValue.value!, this.interestRate.value!, this.loanTerm.value!).subscribe({
      next: (res) => {
        this.output = res
        console.log(this.output)
        this.isError = false
      },
      error: (err) => {
        this.isError = true
        this.erroMessage = err.error
      },
      complete: () => console.log("complete!")
    }
    )
  }

}
