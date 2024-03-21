import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ConvertionComponent } from "../convertion/convertion.component";
import { Grados } from "../../models/grados.model"


@Component({
  selector: 'app-grade-list',
  standalone: true,
  imports: [ConvertionComponent],
  templateUrl: './grade-list.component.html',
  styleUrl: './grade-list.component.css'
})
export class GradeListComponent {
  grados: Grados[] = [];

  agregaI(){
    const grado: Grados ={
      celcius: 0,
      fahrenheit: 32,
    };
   
    this.grados.push(grado);
  }

  addItem(newItem: Grados) {
    this.grados.push(newItem);
  }

  
}
