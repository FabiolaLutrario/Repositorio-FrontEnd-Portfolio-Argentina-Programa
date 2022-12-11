import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDashboardComponent } from './educacion-dashboard.component';

describe('EducacionDashboardComponent', () => {
  let component: EducacionDashboardComponent;
  let fixture: ComponentFixture<EducacionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
