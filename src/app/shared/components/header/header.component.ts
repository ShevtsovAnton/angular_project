import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/features/login/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app-store.model';
import { logout } from 'src/app/features/login/store/auth.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  userInfo$: Observable<UserModel>;


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(store => store.auth.isAuthenticated);
    this.userInfo$ = this.store.select(store => store.auth.user);
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
