import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAstrologyComponent } from './learn-astrology.component';

describe('LearnAstrologyComponent', () => {
  let component: LearnAstrologyComponent;
  let fixture: ComponentFixture<LearnAstrologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAstrologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAstrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
