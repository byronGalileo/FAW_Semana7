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


  addItem(newItem: Grados) {
    this.grados.push(newItem);
  }

  eliminarRegistro(id: number) {
    this.grados = this.grados.filter(grado => grado.id !== id);
  }
  
}
