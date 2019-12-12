import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from './features/login/services/authorization.service';
import { AddEditCourseService } from './features/add-edit-course/services/add-edit-course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  isAddEditCourseOpen$: Observable<boolean>;

  constructor(private authService: AuthorizationService,
              private addEditCourseService: AddEditCourseService,
              ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.isAddEditCourseOpen$ = this.addEditCourseService.isAddEditCourseOpen();
  }
}
