import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TemplateformComponent } from './templateform.component';

describe('TemplateformComponent', () => {
  let component: TemplateformComponent;
  let fixture: ComponentFixture<TemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [TemplateformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ViewChild myForm', () => {
    expect(component.myForm).toBeTruthy();
  });

  it('should create ViewChild emailcos', () => {
    expect(component.emailcos).toBeTruthy();
  });

  it('should myForm.value.emailcontrol be empty', () => {
    expect(component.myForm.value.emailcontrol).toEqual('');
  });

  it('should myForm.value.emailcontrol be set after resetting', () => {
    const resetButton = fixture.debugElement.query(By.css('.reset'));
    console.log('RESETBUTTON', resetButton);
    resetButton.triggerEventHandler('click', null);
    expect(component.myForm.value.emailcontrol).toEqual('lll');
  });

  it('should myForm.value.emailcontrol be empy after submitting', () => {
    const form = fixture.debugElement.query(By.css('form'));
    console.log('SAVEBUTTON', form);
    form.triggerEventHandler('submit', null);
    //todo find sinnvoll test
    expect(component.myForm.value.emailcontrol).toEqual('');
  });
});
