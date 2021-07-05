import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMockUsersComponent } from './all-mock-users.component';

describe('AllMockUsersComponent', () => {
  let component: AllMockUsersComponent;
  let fixture: ComponentFixture<AllMockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
