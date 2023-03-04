import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsV1Component } from './forms-v1.component';

describe('FormsV1Component', () => {
  let component: FormsV1Component;
  let fixture: ComponentFixture<FormsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
