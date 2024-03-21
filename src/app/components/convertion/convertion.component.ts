import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component,Output, EventEmitter } from '@angular/core';
import { GradeListComponent } from "../grade-list/grade-list.component";
import { Grados } from "../../models/grados.model"




@Component({
  selector: 'app-convertion',
  standalone: true,
  imports: [GradeListComponent,ReactiveFormsModule],
  templateUrl: './convertion.component.html',
  styleUrl: './convertion.component.css'
})
export class ConvertionComponent {
  numero = new FormControl();
  tipo   = new FormControl("");
  id     = 0;


  @Output() newItemEvent = new EventEmitter<Grados>();

  addNewItem() {
    const valor = parseFloat(this.numero.value);
    const tipo = this.tipo.value;

    let resultado;

    if (tipo === 'celcius') {
        resultado = (valor * 9/5) + 32; // Conversión de Celsius a Fahrenheit
        this.newItemEvent.emit(new Grados(this.id ++,valor, resultado));
    } else if (tipo === 'fahrenheit') {
        resultado = (valor - 32) * 5/9; // Conversión de Fahrenheit a Celsius
        this.newItemEvent.emit(new Grados(this.id ++,resultado, valor));
    }
  }



}
