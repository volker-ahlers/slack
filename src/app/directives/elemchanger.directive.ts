import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appElemchanger]',
})
export class ElemchangerDirective implements OnInit {
  @Input() appElemchanger = 'fff';
  @Input() color = '#eef';
  nativeElement: any;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.nativeElement = this.elem.nativeElement;

    console.log(this.elem.nativeElement);
  }

  ngOnInit() {
    // this.elem.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(
      this.elem.nativeElement,
      'backgroundColor',
      this.appElemchanger
    )
  }
  @HostListener('mouseover') onMouseEnter() {
    this.renderer.setStyle(this.nativeElement, 'backgroundColor', '#fee');
  }

  @HostListener('click') function() {
    this.renderer.setStyle(this.nativeElement, 'backgroundColor', '#efe');
  }

  @HostListener('mouseleave') leave() {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'backgroundColor',
      this.color
    );
  }
}
