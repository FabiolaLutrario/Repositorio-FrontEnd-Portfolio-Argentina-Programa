import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarNombreYApellidoComponent } from './modal-editar-nombre-y-apellido.component';

describe('ModalEditarNombreYApellidoComponent', () => {
  let component: ModalEditarNombreYApellidoComponent;
  let fixture: ComponentFixture<ModalEditarNombreYApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarNombreYApellidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarNombreYApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
