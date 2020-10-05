import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDriverComponent } from './assign-driver.component';

describe('AssignDriverComponent', () => {
  let component: AssignDriverComponent;
  let fixture: ComponentFixture<AssignDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
