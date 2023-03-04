import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekCalinderComponent } from './week-calinder.component';

describe('WeekCalinderComponent', () => {
  let component: WeekCalinderComponent;
  let fixture: ComponentFixture<WeekCalinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekCalinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekCalinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
