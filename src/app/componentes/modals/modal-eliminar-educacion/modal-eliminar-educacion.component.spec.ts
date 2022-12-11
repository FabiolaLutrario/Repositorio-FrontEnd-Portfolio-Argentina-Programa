import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarEducacionComponent } from './modal-eliminar-educacion.component';

describe('ModalEliminarEducacionComponent', () => {
  let component: ModalEliminarEducacionComponent;
  let fixture: ComponentFixture<ModalEliminarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
