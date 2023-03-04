import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonsV1Component } from './skeletons-v1.component';

describe('SkeletonsV1Component', () => {
  let component: SkeletonsV1Component;
  let fixture: ComponentFixture<SkeletonsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonsV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
