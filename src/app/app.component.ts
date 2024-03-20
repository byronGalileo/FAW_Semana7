import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertionComponent } from "./components/convertion/convertion.component";
import { GradeListComponent } from "./components/grade-list/grade-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ConvertionComponent,GradeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
}
