import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardV1Component } from './card-v1.component';

describe('CardV1Component', () => {
  let component: CardV1Component;
  let fixture: ComponentFixture<CardV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
