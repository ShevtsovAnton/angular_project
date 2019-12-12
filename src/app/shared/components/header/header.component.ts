import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/features/login/models/user.model';
import { AuthorizationService } from 'src/app/features/login/services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  user: UserModel;

  constructor(private authService: AuthorizationService) {}

  ngOnInit() {
    this.user = {id: 1, firstName: 'Tom', lastName: 'Smith'};
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
