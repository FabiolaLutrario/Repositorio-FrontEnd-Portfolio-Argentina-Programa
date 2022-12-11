import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesDashboardComponent } from './habilidades-dashboard.component';

describe('HabilidadesDashboardComponent', () => {
  let component: HabilidadesDashboardComponent;
  let fixture: ComponentFixture<HabilidadesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
