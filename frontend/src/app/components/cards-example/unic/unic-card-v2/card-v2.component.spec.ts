import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardV2Component } from './card-v2.component';

describe('CardV2Component', () => {
  let component: CardV2Component;
  let fixture: ComponentFixture<CardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
