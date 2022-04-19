import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitprofileComponent } from './gitprofile.component';

describe('GitprofileComponent', () => {
  let component: GitprofileComponent;
  let fixture: ComponentFixture<GitprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
