import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteV2Component } from './templete-v2.component';

describe('TempleteV2Component', () => {
  let component: TempleteV2Component;
  let fixture: ComponentFixture<TempleteV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleteV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleteV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
