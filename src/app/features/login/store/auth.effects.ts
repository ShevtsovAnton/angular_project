import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { loginRequest, loginComplete, loginFailure, logout } from './auth.actions';
import { AuthorizationService } from '../services/authorization.service';
import { UserModel } from '../models/user.model';
import { AppRoutes } from 'src/app/shared/enums/routes.enum';

@Injectable()
export class AuthStoreEffects {
  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      switchMap(({ login, password }): Observable<Action> =>
        this.authorizationService.login(login, password).pipe(
          map((user: UserModel) => loginComplete({ user })),
          catchError((error) => of(loginFailure({ error })))
        )
      )
    )
  );

  loginComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginComplete),
      tap(() => this.router.navigate([AppRoutes.Courses]))
    ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFailure),
      tap((error) => {
        console.log(error);
        return this.router.navigate([AppRoutes.Login]);
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => this.router.navigate([AppRoutes.Login]))
    ),
    { dispatch: false }
  );
}
