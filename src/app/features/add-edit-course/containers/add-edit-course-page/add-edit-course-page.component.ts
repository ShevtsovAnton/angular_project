import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoursesItemModel } from 'src/app/features/courses/models/courses-item.model';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-edit-course-page',
  templateUrl: './add-edit-course-page.component.html',
  styleUrls: ['./add-edit-course-page.component.scss']
})
export class AddEditCoursePageComponent implements OnInit, OnDestroy {
  course: CoursesItemModel = {
    id: null,
    title: null,
    creationDate: null,
    duration: null,
    description: null,
    imagePath: null,
    topRated: false,
    authors: [{
      id: '999',
      name: ''
    }]
  };
  isCourseNew = true;
  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        if (params.id) {
          this.coursesService.getCourse(params.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(course => {
              this.course = course;
            }
            );
          this.isCourseNew = false;
        }
      });
  }

  save(): void {
    if (this.isCourseNew) {
      this.coursesService.createCourse(this.course)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => this.router.navigate(['/courses']));
    } else {
      this.coursesService.updateCourse(this.course)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => this.router.navigate(['/courses']));
    }
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    }
}
