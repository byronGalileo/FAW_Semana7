import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private imgPath: string = "../../../assets/img/";
  private img: string = "Twice.png";
  
  private imgSource = new BehaviorSubject<string>(this.imgPath + this.img);
  currentImg = this.imgSource.asObservable();

  changeImage(img: string) {
    this.img = img;
    this.imgSource.next(this.imgPath + this.img);
  }

  constructor() { }
  
}
