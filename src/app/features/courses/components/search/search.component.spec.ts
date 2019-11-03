import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let hostElement: HTMLElement;
  let searchButton: HTMLElement;

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

  it('should log message to console', () => {
    spyOn(window.console, 'log');
    hostElement = fixture.nativeElement;
    searchButton = hostElement.querySelector('i');
    searchButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(window.console.log).toHaveBeenCalled();
});
});
