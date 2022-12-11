import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarIdiomaComponent } from './modal-editar-idioma.component';

describe('ModalEditarIdiomaComponent', () => {
  let component: ModalEditarIdiomaComponent;
  let fixture: ComponentFixture<ModalEditarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
