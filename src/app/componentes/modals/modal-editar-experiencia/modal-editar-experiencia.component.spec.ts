import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarExperienciaComponent } from './modal-editar-experiencia.component';

describe('ModalEditarExperienciaComponent', () => {
  let component: ModalEditarExperienciaComponent;
  let fixture: ComponentFixture<ModalEditarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
