import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPersonajesComponent } from './select-personajes.component';

describe('SelectPersonajesComponent', () => {
  let component: SelectPersonajesComponent;
  let fixture: ComponentFixture<SelectPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
