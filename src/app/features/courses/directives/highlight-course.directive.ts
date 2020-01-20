import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]',
  exportAs: 'appHighlightCourse'
})
export class HighlightCourseDirective implements OnInit {

  @Input('appHighlightCourse') creationDate: string;
  currentDateMs: number = Date.now();
  freshCourseDays = 14;
  freshCourseMs = this.freshCourseDays * 1000 * 60 * 60 * 24;


  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlight(this.creationDate);
  }

  private highlight(creationDate: string): void {
    const creationDateMs = Date.parse(creationDate);
    if ((creationDateMs < this.currentDateMs) &&
       (creationDateMs >= this.currentDateMs - this.freshCourseMs)) {
      this.el.nativeElement.style.border = '2px solid #00FF00';
    } else if (creationDateMs > this.currentDateMs) {
      this.el.nativeElement.style.border = '2px solid #0000FF';
    }
  }
}
