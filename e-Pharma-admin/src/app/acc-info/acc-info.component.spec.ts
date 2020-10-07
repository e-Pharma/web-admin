import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccInfoComponent } from './acc-info.component';

describe('AccInfoComponent', () => {
  let component: AccInfoComponent;
  let fixture: ComponentFixture<AccInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
