import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSizeCalendarComponent } from './m-size-calendar.component';

describe('MSizeCalendarComponent', () => {
  let component: MSizeCalendarComponent;
  let fixture: ComponentFixture<MSizeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSizeCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSizeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
