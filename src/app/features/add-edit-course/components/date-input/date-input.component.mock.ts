import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-input',
    template: '<p>Mock Date input Component</p>'
  })
export class DateInputMockComponent {
  @Input() creationDate: number;
}
