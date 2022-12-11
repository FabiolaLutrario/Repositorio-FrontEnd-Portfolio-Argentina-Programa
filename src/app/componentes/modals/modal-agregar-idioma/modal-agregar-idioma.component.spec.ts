import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarIdiomaComponent } from './modal-agregar-idioma.component';

describe('ModalAgregarIdiomaComponent', () => {
  let component: ModalAgregarIdiomaComponent;
  let fixture: ComponentFixture<ModalAgregarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
