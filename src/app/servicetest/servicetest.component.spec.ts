import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetestComponent } from './servicetest.component';
import { Servicetest1Component } from './servicetest1/servicetest1.component';
import { Servicetest2Component } from './servicetest2/servicetest2.component';
import { Servicetest3Component } from './servicetest3/servicetest3.component';

describe('ServicetestComponent', () => {
  let component: ServicetestComponent;
  let fixture: ComponentFixture<ServicetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicetestComponent, Servicetest1Component, Servicetest2Component, Servicetest3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
