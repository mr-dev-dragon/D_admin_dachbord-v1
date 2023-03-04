import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploudFileComponent } from './uploud-file.component';

describe('UploudFileComponent', () => {
  let component: UploudFileComponent;
  let fixture: ComponentFixture<UploudFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploudFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploudFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
