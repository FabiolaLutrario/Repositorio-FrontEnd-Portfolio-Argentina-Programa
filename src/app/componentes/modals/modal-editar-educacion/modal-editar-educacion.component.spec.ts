import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEducacionComponent } from './modal-editar-educacion.component';

describe('ModalEditarEducacionComponent', () => {
  let component: ModalEditarEducacionComponent;
  let fixture: ComponentFixture<ModalEditarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
