import { Component } from '@angular/core';
import { GradeListComponent } from "../../components/grade-list/grade-list.component";
import { PersonajesComponent } from "../../components/personajes/personajes.component";
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
