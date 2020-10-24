import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppraisalComponent } from './list-appraisal.component';

describe('ListAppraisalComponent', () => {
  let component: ListAppraisalComponent;
  let fixture: ComponentFixture<ListAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
