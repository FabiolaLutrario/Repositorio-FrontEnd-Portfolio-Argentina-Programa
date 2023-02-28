import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarIdiomaComponent } from './agregar-idioma.component';

describe('AgregarIdiomaComponent', () => {
  let component: AgregarIdiomaComponent;
  let fixture: ComponentFixture<AgregarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
