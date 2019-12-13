import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizationService } from './features/login/services/authorization.service';
import { AppRoutes } from './shared/enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authorizationService.isAuthenticated()
      .pipe(
        map(isAuthenticated => !!isAuthenticated || this.router.createUrlTree([AppRoutes.Login]))
      );
  }
}
