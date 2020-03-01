import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store/app-store.model';
import { Store } from '@ngrx/store';
import { flatMap, first } from 'rxjs/operators';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(state => state.auth.user.fakeToken).pipe(
      first(),
      flatMap(token => {
        const authRequest = !!token ?
          req.clone({ headers: req.headers.set('Authorization', token) }) :
          req;
        return next.handle(authRequest);
      })
    );
  }
}
