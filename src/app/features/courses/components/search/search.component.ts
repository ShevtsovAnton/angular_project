import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() makeSearchQuery = new EventEmitter<string>();
  @ViewChild('searchInput') searchInputRef: ElementRef;

  searchInputValue = '';
  private destroy$ = new Subject();

  ngOnInit() {
    const searchInputObservable = fromEvent(this.searchInputRef.nativeElement, 'input');

    searchInputObservable
      .pipe(
        debounceTime(1000),
        filter((e: any) => e.target.value.length >= 3),
        takeUntil(this.destroy$)
      )
      .subscribe(e => this.search());
  }

  search() {
    this.makeSearchQuery.emit(this.searchInputValue);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
