import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationBarComponent } from './recommendation-bar.component';

describe('RecommendationBarComponent', () => {
  let component: RecommendationBarComponent;
  let fixture: ComponentFixture<RecommendationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
