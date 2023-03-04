import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidersV1Component } from './caliders-v1.component';

describe('CalidersV1Component', () => {
  let component: CalidersV1Component;
  let fixture: ComponentFixture<CalidersV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidersV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalidersV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
