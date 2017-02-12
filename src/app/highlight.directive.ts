import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'

})
export class HighlightDirective {

  private el: HTMLElement;

  public constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  public mouseEnter(): void {
    this.el.classList.add('highlight');
  }

  @HostListener('mouseleave')
  public mouseLeave(): void {
    this.el.classList.remove('highlight');
  }

}
