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
  ): Observable<boolean | UrlTree> {
    return this.authorizationService.isAuthenticated()
      .pipe(
<<<<<<< HEAD
        map(isAuthenticated => {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
=======
        map(isAuthenticated => !!isAuthenticated || this.router.createUrlTree([AppRoutes.Login]))
>>>>>>> 78c197e... feat: add enum for routes
      );
  }
}
