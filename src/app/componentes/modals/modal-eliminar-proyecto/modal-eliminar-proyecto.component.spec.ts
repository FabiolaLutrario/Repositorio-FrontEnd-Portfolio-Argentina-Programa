import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarProyectoComponent } from './modal-eliminar-proyecto.component';

describe('ModalEliminarProyectoComponent', () => {
  let component: ModalEliminarProyectoComponent;
  let fixture: ComponentFixture<ModalEliminarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
