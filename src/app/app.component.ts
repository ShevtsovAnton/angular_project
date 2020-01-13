import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from './features/login/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  isAddEditCourseOpen$: Observable<boolean>;

  constructor(private authService: AuthorizationService,
              ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
