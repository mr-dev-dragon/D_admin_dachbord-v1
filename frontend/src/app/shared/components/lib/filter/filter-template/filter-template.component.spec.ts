import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTemplateComponent } from './filter-template.component';

describe('FilterTemplateComponent', () => {
  let component: FilterTemplateComponent;
  let fixture: ComponentFixture<FilterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
