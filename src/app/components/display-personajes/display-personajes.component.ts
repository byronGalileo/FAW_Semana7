import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-display-personajes',
  standalone: true,
  imports: [],
  templateUrl: './display-personajes.component.html',
  styleUrl: './display-personajes.component.css'
})
export class DisplayPersonajesComponent {
  image : string = "";
  

  constructor(private share: SharedService) {}
  
  ngOnInit(): void {
    this.share.currentImg.subscribe(img => {
      this.image = img;
    });
  }

}
