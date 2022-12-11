import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarHabilidadComponent } from './modal-eliminar-habilidad.component';

describe('ModalEliminarHabilidadComponent', () => {
  let component: ModalEliminarHabilidadComponent;
  let fixture: ComponentFixture<ModalEliminarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
