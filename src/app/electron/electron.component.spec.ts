import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronService } from 'ngx-electron';

import { ElectronComponent } from './electron.component';

describe('ElectronComponent', () => {
  let component: ElectronComponent;
  let fixture: ComponentFixture<ElectronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronComponent ],
      providers: [
        ElectronService // Right place to set HomeService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
