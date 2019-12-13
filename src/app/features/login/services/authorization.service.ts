import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
   }

  private hasToken(): boolean {
    return !!localStorage.getItem('loginInfo');
  }

  login(userLogin: string): void {
    const loginInfo = {
      userLogin,
      token: Date.now()
    };
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    this.isLoggedInSubject.next(this.hasToken());
    console.log(`You are logged in successfully as ${userLogin}`);
    this.router.navigate(['/courses']);
  }

  logout(): void {
    localStorage.removeItem('loginInfo');
    this.isLoggedInSubject.next(this.hasToken());
    console.log('You are logged out');
    this.router.navigate([AppRoutes.Login]);
  }

  getUserInfo(): string {
    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo) {
      console.log('loginInfo', JSON.parse(loginInfo));
      return JSON.parse(loginInfo).userLogin;
    }
  }
}
