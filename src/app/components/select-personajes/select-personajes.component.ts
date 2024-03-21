import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-select-personajes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-personajes.component.html',
  styleUrl: './select-personajes.component.css'
})
export class SelectPersonajesComponent {
  image = new FormControl();

  constructor(private share: SharedService) {}

  setImage(){
    this.share.changeImage(this.image.value);
  }
}
