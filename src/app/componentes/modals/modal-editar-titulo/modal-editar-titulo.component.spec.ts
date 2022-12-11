import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarTituloComponent } from './modal-editar-titulo.component';

describe('ModalEditarTituloComponent', () => {
  let component: ModalEditarTituloComponent;
  let fixture: ComponentFixture<ModalEditarTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
