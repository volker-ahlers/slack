import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicetest2Component } from './servicetest2.component';

describe('Servicetest2Component', () => {
  let component: Servicetest2Component;
  let fixture: ComponentFixture<Servicetest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicetest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicetest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
