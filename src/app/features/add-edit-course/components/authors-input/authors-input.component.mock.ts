import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors-input',
    template: '<p>Mock Authors input Component</p>'
  })
export class AuthorsInputMockComponent {
  @Input() authors: string;
}

