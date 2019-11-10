import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() makeSearchQuery: EventEmitter<string> = new EventEmitter();
  searchQuery = '';

  search(event) {
    if (event.type === 'click' || event.key === 'Enter') {
      this.makeSearchQuery.emit(this.searchQuery);
      this.searchQuery = '';
    }
  }
}
