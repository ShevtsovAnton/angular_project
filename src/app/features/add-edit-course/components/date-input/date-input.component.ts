import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() creationDate: number;
  @Output() creationDateChange: EventEmitter<number> = new EventEmitter<number>();

  onCreationDateChange(event): void {
    const dateString = event.target.value;
    const [day, month, year] = dateString.split(/\/|\./);
    const dateInMs = Date.parse(`${month}/${day}/${year}`);
    this.creationDateChange.emit(dateInMs);
  }
}
