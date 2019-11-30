import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEditCourseService {

  isAddEditCourseOpenSubject = new BehaviorSubject<boolean>(false);

  isAddEditCourseOpen(): Observable<boolean> {
    return this.isAddEditCourseOpenSubject.asObservable();
   }

  constructor() { }

  openAddEditCoursePage(): void {
    return this.isAddEditCourseOpenSubject.next(true);
  }

  closeAddCoursePage(): void {
    return this.isAddEditCourseOpenSubject.next(false);
  }
}
