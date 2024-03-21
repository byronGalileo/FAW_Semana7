import { Component } from '@angular/core';
import { SelectPersonajesComponent } from "../select-personajes/select-personajes.component"
import { DisplayPersonajesComponent } from "../display-personajes/display-personajes.component"

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [SelectPersonajesComponent,DisplayPersonajesComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

}
