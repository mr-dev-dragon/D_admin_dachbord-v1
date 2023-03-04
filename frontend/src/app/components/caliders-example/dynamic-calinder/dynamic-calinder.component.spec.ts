import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCalinderComponent } from './dynamic-calinder.component';

describe('DynamicCalinderComponent', () => {
  let component: DynamicCalinderComponent;
  let fixture: ComponentFixture<DynamicCalinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCalinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCalinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
