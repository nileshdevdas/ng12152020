import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appPopout]'
})
export class PopoutDirective {
  constructor(private element: ElementRef) {
    console.log("Directive calllllllllllllllll..........");
  }
  @HostListener("mouseenter")
  onMouseEnter($event) {
    this.element.nativeElement.style.backgroundColor = 'white'
    this.element.nativeElement.style.color = 'black';
  }
  @HostListener("mouseleave")
  onMouseLeave($event) {
    this.element.nativeElement.style.backgroundColor = 'black'
    this.element.nativeElement.style.color = 'white';
  }
  @HostListener("click")
  onClick() {
    // alert("Your clicked me ......");
    this.element.nativeElement.innerHTML = "<div class='btn btn-danger'>xxx</div>"
  }
}
