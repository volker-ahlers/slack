import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, from, of } from 'rxjs';
import { ObservService } from '../services/observ.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.less'],
})
export class CompComponent {
  test = this.observService.test;
  obs = new BehaviorSubject('initial value');
  one = of([1, 2, 3, 4, 5]);
  two = from([1, 2, 3]);
  y:any='';

  @ViewChild('hello', { static: false }) ref!: ElementRef;
  @ViewChild('button', { static: false }) button!: ElementRef;
  @ViewChild('text', { static: false }) input!: ElementRef;
  constructor(private observService: ObservService) {}

  ngOnInit() {   
    this.one.subscribe((x) => console.log('one.subscribe',x));//subscribe for consolelog but not for frontend
    this.two.subscribe((x) => console.log('two.subscribe',x));//subscribe for consolelog but not for frontend
    this.obs.pipe().subscribe((letx) => {
      this.callfunctions(letx);
    });
  }

  async callfunctions(letx: any){
    await this.op1(letx), this.op2(), this.op3(), this.op4();
  }
  ngAfterViewInit() {
    console.log(this.test);

    console.log(this.ref);

    this.ref.nativeElement.querySelector('div').innerHTML = 'Hello Angular';
    console.log(this.ref.nativeElement);
    this.button.nativeElement.innerHTML = "klickme";
  }

  op1(letx: any) {
    console.log('a', letx);
  }

  op2() {
    let y = this.one.pipe(filter((num: any) => num > 3));
    console.log(
      'b',
      y.subscribe((x) => console.log(x))
    );
  }

  op3() {
    console.log('c');
  }

  op4() {
    console.log('d');
  }

  click(){
    this.y = this.input.nativeElement.value;
    this.observService.test.next("a very new value: " + this.y);
  }
}
