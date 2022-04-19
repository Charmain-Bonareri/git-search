import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitrepoComponent } from './gitrepo.component';

describe('GitrepoComponent', () => {
  let component: GitrepoComponent;
  let fixture: ComponentFixture<GitrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitrepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
