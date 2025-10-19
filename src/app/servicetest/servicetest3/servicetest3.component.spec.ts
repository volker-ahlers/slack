import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicetest3Component } from './servicetest3.component';

describe('Servicetest3Component', () => {
  let component: Servicetest3Component;
  let fixture: ComponentFixture<Servicetest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicetest3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicetest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
