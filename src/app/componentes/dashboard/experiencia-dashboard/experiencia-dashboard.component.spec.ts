import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDashboardComponent } from './experiencia-dashboard.component';

describe('ExperienciaDashboardComponent', () => {
  let component: ExperienciaDashboardComponent;
  let fixture: ComponentFixture<ExperienciaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
