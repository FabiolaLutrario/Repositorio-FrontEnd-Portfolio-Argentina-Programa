import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarProyectoComponent } from './modal-agregar-proyecto.component';

describe('ModalAgregarProyectoComponent', () => {
  let component: ModalAgregarProyectoComponent;
  let fixture: ComponentFixture<ModalAgregarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
