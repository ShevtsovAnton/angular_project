import { Component, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OrderByPipe } from './order-by.pipe';
import { coursesListMock } from '../containers/courses-page/courses-list.mock';
import { CoursesItemModel } from '../models/courses-item.model';




@Component({
  template: '<div> {{ value | orderBy }}'
})
export class PipeHostComponent {
  value: CoursesItemModel[];
}

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('OrderByPipe', () => {
  beforeEach(async (() => {
    TestBed
      .configureTestingModule({
        declarations: [
          OrderByPipe,
          PipeHostComponent
        ]
      })
      .compileComponents();
  }));

  let fixture: ComponentFixture<PipeHostComponent>;
  let component: PipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeHostComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should sort courses by creation date in descending order', () => {
    component.value = [...coursesListMock];
    fixture.detectChanges();

    expect(component.value[0].title).toEqual('React');
  });
});
