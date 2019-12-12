import { Component, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MinutesToHoursPipe } from './minutes-to-hours.pipe';


@Component({
  template: '<div> {{ value | minutesToHours }}'
})
export class PipeHostComponent {
  value: number;
}

describe('MinutesToHoursPipePipe', () => {
  beforeEach(async (() => {
    TestBed
      .configureTestingModule({
        declarations: [MinutesToHoursPipe, PipeHostComponent]
      })
      .compileComponents();
  }));

  let fixture: ComponentFixture<PipeHostComponent>;
  let debugElement: DebugElement;
  let component: PipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should display 1 h 30 min', () => {
    component.value = 90;
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('1 h 30 min');
  });

  it('should display 30 min', () => {
    component.value = 30;
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('30 min');
  });

});
