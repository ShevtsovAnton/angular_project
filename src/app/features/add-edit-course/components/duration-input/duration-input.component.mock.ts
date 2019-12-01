import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-duration-input',
    template: '<p>Mock Duration input Component</p>'
  })
export class DurationInputMockComponent {
  @Input() duration: number;
}
