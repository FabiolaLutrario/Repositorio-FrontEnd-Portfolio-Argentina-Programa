import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarFotoComponent } from './modal-editar-foto.component';

describe('ModalEditarFotoComponent', () => {
  let component: ModalEditarFotoComponent;
  let fixture: ComponentFixture<ModalEditarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
