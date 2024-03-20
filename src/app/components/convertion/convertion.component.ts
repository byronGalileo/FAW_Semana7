import { Component } from '@angular/core';
import { GradeListComponent } from "../grade-list/grade-list.component";

@Component({
  selector: 'app-convertion',
  standalone: true,
  imports: [GradeListComponent],
  templateUrl: './convertion.component.html',
  styleUrl: './convertion.component.css'
})
export class ConvertionComponent {

}
