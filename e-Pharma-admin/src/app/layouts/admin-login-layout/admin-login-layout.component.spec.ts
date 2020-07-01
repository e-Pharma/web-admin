import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginLayoutComponent } from './admin-login-layout.component';

describe('AdminLoginLayoutComponent', () => {
  let component: AdminLoginLayoutComponent;
  let fixture: ComponentFixture<AdminLoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
