import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonajesComponent } from './display-personajes.component';

describe('DisplayPersonajesComponent', () => {
  let component: DisplayPersonajesComponent;
  let fixture: ComponentFixture<DisplayPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
