import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoDashboardComponent } from './encabezado-dashboard.component';

describe('EncabezadoDashboardComponent', () => {
  let component: EncabezadoDashboardComponent;
  let fixture: ComponentFixture<EncabezadoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
