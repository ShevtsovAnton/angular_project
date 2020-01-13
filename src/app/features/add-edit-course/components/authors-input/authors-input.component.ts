import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss']
})
export class AuthorsInputComponent {
  @Input() authors: string;

  @Output() authorsChange: EventEmitter<string> = new EventEmitter<string>();

  onAuthorsChange(event: string): void {
    this.authorsChange.emit(event);
  }
}

