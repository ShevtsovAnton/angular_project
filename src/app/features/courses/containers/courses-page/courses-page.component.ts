import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  idToDelete: string;
  numberOfCourses: number;
  coursesPerPage = 9;
  page = 1;
  searchQuery = '';
  courses: CoursesItemModel[] = [];
  allCoursesDisplayed = false;
  private destroy$ = new Subject();

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coursesService.getList(this.page - 1, this.coursesPerPage)
      .pipe(takeUntil(this.destroy$))
      .subscribe(coursesList => {
        this.courses = coursesList;
      });
  }

  delete(id: string): void {
    this.coursesService.remove(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (this.page !== 1 && this.courses.length === 1) {
          this.page -= 1;
        }
        this.numberOfCourses -= 1;
        this.coursesService.getList(this.page - 1, this.coursesPerPage)
          .pipe(takeUntil(this.destroy$))
          .subscribe(courses => {
            this.courses = courses;
          });
      });
  }

  edit(course: CoursesItemModel): void {
    this.router.navigate([AppRoutes.Courses, course.id]);
  }

  search(textFragment: string): void {
    this.searchQuery = textFragment;

    this.coursesService.getList(0, this.coursesPerPage, textFragment)
      .pipe(takeUntil(this.destroy$))
      .subscribe(coursesInfo => {
        this.courses = coursesInfo;
        this.numberOfCourses = coursesInfo.length;
      });
  }

  openModal(id: string): void {
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
      .pipe(takeUntil(this.destroy$))
      .subscribe(courses => {
        if (courses.length < this.coursesPerPage) {
          this.allCoursesDisplayed = true;
          return;
        }
        this.courses = [...this.courses, ...courses];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
