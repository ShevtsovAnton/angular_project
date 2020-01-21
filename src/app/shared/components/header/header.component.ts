import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/features/login/services/authorization.service';
import { UserModel } from 'src/app/features/login/models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo$: Observable<UserModel>;
  isAuthenticated$: Observable<boolean>;
  userInfo = '';

  constructor(private authService: AuthorizationService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.userInfo$ = this.authService.getUserInfo();
  }

  logout(): void {
    this.authService.logout();
  }
}
