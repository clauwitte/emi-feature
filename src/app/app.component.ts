import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from './form/form.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent, MatToolbar],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emi-feature';
}
