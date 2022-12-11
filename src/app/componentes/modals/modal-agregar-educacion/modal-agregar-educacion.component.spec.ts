import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEducacionComponent } from './modal-agregar-educacion.component';

describe('ModalAgregarEducacionComponent', () => {
  let component: ModalAgregarEducacionComponent;
  let fixture: ComponentFixture<ModalAgregarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
