import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarIdiomaComponent } from './modal-eliminar-idioma.component';

describe('ModalEliminarIdiomaComponent', () => {
  let component: ModalEliminarIdiomaComponent;
  let fixture: ComponentFixture<ModalEliminarIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
