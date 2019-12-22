import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { TokenModel } from '../models/token.model';

const LOGIN_PATH = 'http://localhost:3004/auth/login';
const USER_INFO_PATH = 'http://localhost:3004/auth/userinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public login(login: string, password: string): Observable<UserModel> {
    return this.http.post<TokenModel>(`${LOGIN_PATH}`, {
      login,
      password
    }).pipe(
      flatMap((res: TokenModel): Observable<UserModel> => {
        return this.http.post<UserModel>(`${USER_INFO_PATH}`, { token: res.token })
          .pipe(catchError(error => of(error)));
      }),
      catchError(error => of(error))
    );
  }
}
