import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPostsPageComponent } from './lazy-posts-page.component';

describe('LazyPostsPageComponent', () => {
  let component: LazyPostsPageComponent;
  let fixture: ComponentFixture<LazyPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
