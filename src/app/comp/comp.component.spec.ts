import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from '../error/error.component';
import { TestComponent } from '../test/test.component';

import { CompComponent } from './comp.component';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompComponent, TestComponent, ErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
