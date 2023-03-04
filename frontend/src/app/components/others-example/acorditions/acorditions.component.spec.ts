import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcorditionsComponent } from './acorditions.component';

describe('AcorditionsComponent', () => {
  let component: AcorditionsComponent;
  let fixture: ComponentFixture<AcorditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcorditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcorditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
