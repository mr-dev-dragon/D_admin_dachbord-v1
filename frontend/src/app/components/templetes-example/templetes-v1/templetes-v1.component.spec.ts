import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletesV1Component } from './templetes-v1.component';

describe('TempletesV1Component', () => {
  let component: TempletesV1Component;
  let fixture: ComponentFixture<TempletesV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletesV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
