import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarHabilidadComponent } from './modal-agregar-habilidad.component';

describe('ModalAgregarHabilidadComponent', () => {
  let component: ModalAgregarHabilidadComponent;
  let fixture: ComponentFixture<ModalAgregarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
