import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchInput: HTMLInputElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise  search makeSearchQuery on "enter" key', () => {
    component.searchQuery = 'test';
    component.makeSearchQuery.subscribe(inputValue => {
      expect(inputValue).toBe('test');
    });
    debugElement = fixture.debugElement;
    searchInput = debugElement.query(By.css('.search__input')).nativeElement;
    searchInput.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter'}));
  });

  it('should clear input field', () => {
    component.searchQuery = 'test';
    component.search();
    expect(component.searchQuery).toBe('');
  });

  it('should not clear input field', () => {
    component.searchQuery = 'test';
    debugElement = fixture.debugElement;
    searchInput = debugElement.query(By.css('.search__input')).nativeElement;
    searchInput.dispatchEvent(new KeyboardEvent('keypress', { key: 'Escape'}));
    expect(component.searchQuery).toBe('test');
  });
});
