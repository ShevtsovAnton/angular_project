import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
   }

  private hasToken(): boolean {
    console.log(!!localStorage.getItem('loginInfo'));
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
  }

  logout(): void {
    localStorage.removeItem('loginInfo');
    this.isLoggedInSubject.next(this.hasToken());
    console.log('You are logged out');
  }

  getUserInfo(): string {
    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo) {
      console.log('loginInfo', JSON.parse(loginInfo));
      return JSON.parse(loginInfo).userLogin;
    }
  }
}
