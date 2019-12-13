import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CoursesItemModel } from 'src/app/features/courses/models/courses-item.model';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { Subscription } from 'rxjs';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

@Component({
  selector: 'app-add-edit-course-page',
  templateUrl: './add-edit-course-page.component.html',
  styleUrls: ['./add-edit-course-page.component.scss']
})
export class AddEditCoursePageComponent implements OnInit, OnDestroy {
  course: CoursesItemModel;
  fakeNewCourse: CoursesItemModel = {
    id: 9,
    title: 'New course',
    creationDate: +new Date(2019, 11, 31),
    duration: 456,
    description: 'This is a new course',
    imagePath: 'assets/angular_new.png',
    topRated: false,
    authors: ''
  };
  isCourseNew = true;

  routeSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.course = this.coursesService.getCourse(+params.id);
        this.isCourseNew = false;
      } else {
        this.course = this.fakeNewCourse;
      }
    });
  }

  save(): void {
    if (this.isCourseNew) {
      this.coursesService.createCourse(this.course);
    } else {
      this.coursesService.updateCourse(this.course);
    }
    this.router.navigate([AppRoutes]);
  }

  cancel(): void {
    this.router.navigate([AppRoutes]);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
