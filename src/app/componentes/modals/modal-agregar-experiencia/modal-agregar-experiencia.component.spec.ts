import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarExperienciaComponent } from './modal-agregar-experiencia.component';

describe('ModalAgregarExperienciaComponent', () => {
  let component: ModalAgregarExperienciaComponent;
  let fixture: ComponentFixture<ModalAgregarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
