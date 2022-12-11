import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasDashboardComponent } from './idiomas-dashboard.component';

describe('IdiomasDashboardComponent', () => {
  let component: IdiomasDashboardComponent;
  let fixture: ComponentFixture<IdiomasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
