import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let eventMock: {};

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
    eventMock = {key: 'Enter'};
    component.search(eventMock);
  });

  it('should clear input field', () => {
    component.searchQuery = 'test';
    eventMock = {type: 'click'};
    component.search(eventMock);
    expect(component.searchQuery).toBe('');
  });

  it('should not clear input field', () => {
    component.searchQuery = 'test';
    eventMock = {type: 'Escape'};
    component.search(eventMock);
    expect(component.searchQuery).toBe('test');
  });
});
