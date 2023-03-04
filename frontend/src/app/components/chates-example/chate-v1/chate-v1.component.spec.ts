import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateV1Component } from './chate-v1.component';

describe('ChateV1Component', () => {
  let component: ChateV1Component;
  let fixture: ComponentFixture<ChateV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChateV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
