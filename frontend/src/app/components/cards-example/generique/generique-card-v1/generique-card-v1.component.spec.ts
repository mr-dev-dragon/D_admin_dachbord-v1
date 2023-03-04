import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriqueCardV1Component } from './generique-card-v1.component';

describe('GeneriqueCardV1Component', () => {
  let component: GeneriqueCardV1Component;
  let fixture: ComponentFixture<GeneriqueCardV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneriqueCardV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneriqueCardV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
