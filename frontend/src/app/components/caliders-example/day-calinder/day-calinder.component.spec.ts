import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCalinderComponent } from './day-calinder.component';

describe('DayCalinderComponent', () => {
  let component: DayCalinderComponent;
  let fixture: ComponentFixture<DayCalinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayCalinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayCalinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
