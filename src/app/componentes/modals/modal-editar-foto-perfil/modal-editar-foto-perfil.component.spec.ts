import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarFotoPerfilComponent } from './modal-editar-foto-perfil.component';

describe('ModalEditarFotoPerfilComponent', () => {
  let component: ModalEditarFotoPerfilComponent;
  let fixture: ComponentFixture<ModalEditarFotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarFotoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarFotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
