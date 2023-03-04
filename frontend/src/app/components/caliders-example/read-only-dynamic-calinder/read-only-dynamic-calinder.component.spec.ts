import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyDynamicCalinderComponent } from './read-only-dynamic-calinder.component';

describe('ReadOnlyDynamicCalinderComponent', () => {
  let component: ReadOnlyDynamicCalinderComponent;
  let fixture: ComponentFixture<ReadOnlyDynamicCalinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyDynamicCalinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadOnlyDynamicCalinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
