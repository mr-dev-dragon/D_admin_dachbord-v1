import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCalinderComponent } from './month-calinder.component';

describe('MonthCalinderComponent', () => {
  let component: MonthCalinderComponent;
  let fixture: ComponentFixture<MonthCalinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthCalinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthCalinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
