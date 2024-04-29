import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsLoaderComponent } from './reviews-loader.component';

describe('ReviewsLoaderComponent', () => {
  let component: ReviewsLoaderComponent;
  let fixture: ComponentFixture<ReviewsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewsLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
