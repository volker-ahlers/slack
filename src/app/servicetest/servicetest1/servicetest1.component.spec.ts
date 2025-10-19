import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicetest1Component } from './servicetest1.component';

describe('Servicetest1Component', () => {
  let component: Servicetest1Component;
  let fixture: ComponentFixture<Servicetest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicetest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicetest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
