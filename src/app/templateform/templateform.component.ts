import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.less']
})
export class TemplateformComponent {
  @ViewChild('myForm') myForm!:NgForm;
  @ViewChild('emailco') emailcos:any;
  emailcontrol: string = '';
  
 constructor(){
  console.log('testconstructor'); 
 }
  submit(myform: NgForm){
    console.log('SUBMITFORM');
    console.log('myform', this.myForm)
    console.log('emailcos', this.emailcos)
  }
  resetForm(myForm: NgForm){
    console.log('RESETFORM');
    myForm.reset();
    myForm.value.emailcontrol = 'lll';
    console.log(myForm.value)
  }
}
