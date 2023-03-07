import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCloseSectionExComponent } from './self-close-section-ex.component';

describe('SelfCloseSectionExComponent', () => {
  let component: SelfCloseSectionExComponent;
  let fixture: ComponentFixture<SelfCloseSectionExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfCloseSectionExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfCloseSectionExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
