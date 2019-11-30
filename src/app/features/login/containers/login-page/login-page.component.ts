import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  constructor(private authService: AuthorizationService) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
