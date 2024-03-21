import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradeListComponent } from "./components/grade-list/grade-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GradeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
}
