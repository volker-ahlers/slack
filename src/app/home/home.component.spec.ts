import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Servicetest1Component } from '../servicetest/servicetest1/servicetest1.component';
import { Servicetest2Component } from '../servicetest/servicetest2/servicetest2.component';
import { Servicetest3Component } from '../servicetest/servicetest3/servicetest3.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, Servicetest1Component, Servicetest2Component, Servicetest3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
