import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() makeSearchQuery = new EventEmitter<string>();
  @ViewChild('searchInput') searchInputRef: ElementRef;

  searchInputValue = '';

  ngOnInit() {
    const searchInputObservable = fromEvent(this.searchInputRef.nativeElement, 'keyup');

    searchInputObservable
      .pipe(
        debounceTime(1000),
        filter((e: KeyboardEvent) => (e.target as HTMLInputElement).value.length >= 3),
        untilDestroyed(this)
      )
      .subscribe(() => this.search());
  }

  search() {
    this.makeSearchQuery.emit(this.searchInputValue);
  }

  ngOnDestroy() {}
}
