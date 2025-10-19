import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObservService } from '../services/observ.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {
  @ViewChild('button', { static: false }) button!: ElementRef;
  @ViewChild('text', { static: false }) input!: ElementRef;
  y:any='';
  constructor(public observService: ObservService) {}
 
  ngAfterViewInit() {
    console.log(this.observService.test)
    this.button.nativeElement.innerHTML = "klick";
}  

  click(){
    this.y = this.input.nativeElement.value;
    this.observService.test.next("a very new value: " + this.y);
  }
}
