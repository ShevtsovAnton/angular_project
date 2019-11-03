import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;
  let hostElement: HTMLElement;
  let loadMoreButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message to console', () => {
    spyOn(window.console, 'log');
    hostElement = fixture.nativeElement;
    loadMoreButton = hostElement.querySelector('button');
    loadMoreButton.click();
    expect(window.console.log).toHaveBeenCalled();
  });
});
