import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradeListComponent } from "./components/grade-list/grade-list.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GradeListComponent,PersonajesComponent,ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
}
