import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognozysComponent } from './prognozys.component';

describe('PrognozysComponent', () => {
  let component: PrognozysComponent;
  let fixture: ComponentFixture<PrognozysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrognozysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrognozysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
