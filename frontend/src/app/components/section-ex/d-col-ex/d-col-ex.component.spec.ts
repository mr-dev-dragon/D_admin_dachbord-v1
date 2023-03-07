import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DColExComponent } from './d-col-ex.component';

describe('DColExComponent', () => {
  let component: DColExComponent;
  let fixture: ComponentFixture<DColExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DColExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DColExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
