import {
        Component,
        Input,
        OnInit,
        OnChanges,
        DoCheck,
        SimpleChanges,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked
      } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit,
                                           DoCheck,
                                           AfterContentInit,
                                           AfterContentChecked,
                                           AfterViewInit,
                                           AfterViewChecked,
                                           OnChanges {
  @Input() coursesAdded: number;
  constructor() {
    console.log('constructor is called');
  }

  ngOnInit() {
    console.log('ngOninit lifecycle hook is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck lifecycle hook is called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit lifecycle hook is called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked lifecycle hook is called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit lifecycle hook is called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewInit lifecycle hook is called');
  }
}
