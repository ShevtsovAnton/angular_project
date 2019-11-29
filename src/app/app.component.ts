import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from './features/login/services/authorization.service';
import { AddCourseService } from './features/add-course/services/add-course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  isAddCourseOpen: Observable<boolean>;

  constructor(private authService: AuthorizationService,
              private addCourseService: AddCourseService,
              ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAddCourseOpen = this.addCourseService.isAddCourseOpen();
  }
}
