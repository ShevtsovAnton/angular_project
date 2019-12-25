import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesItemModel } from '../../models/courses-item.model';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';
import { getCoursesList, removeCourse, loadMoreCourses, searchCourses } from '../../store/courses.actions';
import { AppState } from 'src/app/core/store/app-store.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})

export class CoursesPageComponent implements OnInit {
  noDataMessage = 'No Data, feel free to add new course';
  isModalOpen = false;
  idToDelete: number;
  coursesPerPage = 9;
  page = 1;
  searchQuery = '';
  courses: CoursesItemModel[] = [];
  allCoursesDisplayed$: Observable<boolean>;
  list$: Observable<CoursesItemModel[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getCoursesList({
      page: this.page - 1,
      count: this.coursesPerPage,
      textFragment: this.searchQuery
    }));
    this.list$ = this.store.select(store => store.courses.list);
    this.allCoursesDisplayed$ = this.store.select(store => store.courses.allCoursesDisplayed);
  }

  delete(id: number): void {
    this.store.dispatch(removeCourse({ id }));
  }

  edit(course: CoursesItemModel): void {
    this.router.navigate([AppRoutes.Courses, course.id]);
  }

  search(textFragment: string): void {
    this.store.dispatch(searchCourses({
      page: 0,
      count: this.coursesPerPage,
      textFragment
    }));
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
    this.store.dispatch(loadMoreCourses({
      page: this.page - 1,
      count: this.coursesPerPage,
      textFragment: this.searchQuery
    }));
  }
}
