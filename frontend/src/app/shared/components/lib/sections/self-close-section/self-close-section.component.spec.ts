import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCloseSectionComponent } from './self-close-section.component';

describe('SelfCloseSectionComponent', () => {
  let component: SelfCloseSectionComponent;
  let fixture: ComponentFixture<SelfCloseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfCloseSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfCloseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
