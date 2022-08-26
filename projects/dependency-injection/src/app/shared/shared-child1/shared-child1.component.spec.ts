import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedChild1Component } from './shared-child1.component';

describe('SharedChild1Component', () => {
  let component: SharedChild1Component;
  let fixture: ComponentFixture<SharedChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
