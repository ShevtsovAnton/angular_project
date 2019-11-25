import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() makeSearchQuery: EventEmitter<string> = new EventEmitter();
  searchQuery = '';

  search(): void {
    this.makeSearchQuery.emit(this.searchQuery);
    this.searchQuery = '';
  }

  handleKeypress(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.search();
  }
}
