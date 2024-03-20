import { Component } from '@angular/core';
import { ConvertionComponent } from "../convertion/convertion.component";

interface Grados {
  celcius: number;
  fahrenheit: number;
}

@Component({
  selector: 'app-grade-list',
  standalone: true,
  imports: [ConvertionComponent],
  templateUrl: './grade-list.component.html',
  styleUrl: './grade-list.component.css'
})
export class GradeListComponent {
  grados: Grados[] = [];
}
