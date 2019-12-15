import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

const LOGIN_PATH = 'http://localhost:3004/auth/login';
const USER_INFO_PATH = 'http://localhost:3004/auth/userinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private _token = '';

  public get token() {
    return this._token;
  }

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('loginInfo');
  }

  public login(login: string, password: string): Subscription {
    return this.http.post(`${LOGIN_PATH}`, {
      login,
      password
    }).pipe(
      flatMap((res: TokenModel): Observable<UserModel> => {
        this._token = res.token;
        return this.http.post<UserModel>(`${USER_INFO_PATH}`, { token: this._token })
          .pipe(catchError(error => of(error)));
      }))
      .subscribe((userInfo: UserModel) => {
        localStorage.setItem('token', this.token);
        localStorage.setItem('userInfo', `${userInfo.name.first} ${userInfo.name.last}`);
        this.isLoggedInSubject.next(!!this.token);
        this.router.navigate([AppRoutes.Courses]);
      }, (error) => {
        console.log(error);
      });
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this._token = '';
    this.isLoggedInSubject.next(!!this.token);
    console.log('You are logged out');
    this.router.navigate(['/login']);
  }

  getUserInfo(): string {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return userInfo;
    }
  }
}
