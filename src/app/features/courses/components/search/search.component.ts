import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() makeSearchQuery = new EventEmitter<string>();
  @ViewChild('searchInput') searchInputRef: ElementRef;

  searchInputValue = '';
  private destroy$ = new Subject();

  ngOnInit() {
    const searchInputObservable = fromEvent(this.searchInputRef.nativeElement, 'keyup');

    searchInputObservable
      .pipe(
        debounceTime(1000),
        filter((e: KeyboardEvent) => (e.target as HTMLInputElement).value.length >= 3),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.search());
  }

  search() {
    this.makeSearchQuery.emit(this.searchInputValue);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
