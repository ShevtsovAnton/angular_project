import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  isAddCourseOpenSubject = new BehaviorSubject<boolean>(false);

  isAddCourseOpen(): Observable<boolean> {
    return this.isAddCourseOpenSubject.asObservable();
   }

  constructor() { }

  openAddCoursePage(): void {
    return this.isAddCourseOpenSubject.next(true);
  }

  closeAddCoursePage(): void {
    return this.isAddCourseOpenSubject.next(false);
  }
}
