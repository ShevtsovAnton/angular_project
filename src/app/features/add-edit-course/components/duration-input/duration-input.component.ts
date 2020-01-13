import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent {
  @Input() duration: number;

  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();

  onDurationChange(event: number): void {
    this.durationChange.emit(event);
  }
}
