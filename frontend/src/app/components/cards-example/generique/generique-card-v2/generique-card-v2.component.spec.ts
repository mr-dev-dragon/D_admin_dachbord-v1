import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriqueCardV2Component } from './generique-card-v2.component';

describe('GeneriqueCardV2Component', () => {
  let component: GeneriqueCardV2Component;
  let fixture: ComponentFixture<GeneriqueCardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneriqueCardV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneriqueCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
