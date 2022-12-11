import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiDashboardComponent } from './sobre-mi-dashboard.component';

describe('SobreMiDashboardComponent', () => {
  let component: SobreMiDashboardComponent;
  let fixture: ComponentFixture<SobreMiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
