import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarBannerComponent } from './modal-editar-banner.component';

describe('ModalEditarBannerComponent', () => {
  let component: ModalEditarBannerComponent;
  let fixture: ComponentFixture<ModalEditarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
