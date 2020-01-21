import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { CoursesItemModel } from '../../models/courses-item.model';
import { CoursesService } from '../../services/courses.service';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit, OnDestroy {
  noDataMessage = 'No Data, feel free to add new course';
  isModalOpen = false;
  idToDelete: number;
  coursesPerPage = 9;
  page = 1;
  searchQuery = '';
  courses: CoursesItemModel[] = [];
  allCoursesDisplayed = false;

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coursesService.getList(this.page - 1, this.coursesPerPage)
      .pipe(untilDestroyed(this))
      .subscribe(coursesList => {
        this.courses = coursesList;
      });
  }

  delete(id: number): void {
    this.coursesService.remove(id)
      .pipe(
        flatMap((res): Observable<CoursesItemModel[]> => {
          if (this.page !== 1 && this.courses.length === 1) {
            this.page -= 1;
          }
          return this.coursesService.getList(this.page - 1, this.coursesPerPage);
        }),
        untilDestroyed(this)
      )
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  edit(course: CoursesItemModel): void {
    this.router.navigate([AppRoutes.Courses, course.id]);
  }

  search(textFragment: string): void {
    this.searchQuery = textFragment;

    this.coursesService.getList(0, this.coursesPerPage, textFragment)
      .pipe(untilDestroyed(this))
      .subscribe(coursesInfo => {
        this.courses = coursesInfo;
      });
  }

  openModal(id: number): void {
    this.idToDelete = id;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  handleModalResponse(event: boolean) {
    if (event) {
      this.delete(this.idToDelete);
    }
    this.closeModal();
  }

  addCourse(): void {
    this.router.navigate(['courses', 'new']);
  }

  loadMore(): void {
    this.page += 1;
    this.coursesService.getList(this.page - 1, this.coursesPerPage)
      .pipe(untilDestroyed(this))
      .subscribe(courses => {
        this.courses = [...this.courses, ...courses];
        if (courses.length < this.coursesPerPage) {
          this.allCoursesDisplayed = true;
        }
      });
  }

  ngOnDestroy(): void {}
}
