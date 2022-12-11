import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarHabilidadComponent } from './modal-editar-habilidad.component';

describe('ModalEditarHabilidadComponent', () => {
  let component: ModalEditarHabilidadComponent;
  let fixture: ComponentFixture<ModalEditarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
