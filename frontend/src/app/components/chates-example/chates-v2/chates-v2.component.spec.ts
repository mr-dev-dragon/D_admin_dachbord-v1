import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatesV2Component } from './chates-v2.component';

describe('ChatesV2Component', () => {
  let component: ChatesV2Component;
  let fixture: ComponentFixture<ChatesV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatesV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
