import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthGuard } from './auth.guard';
import { AuthorizationService } from './features/login/services/authorization.service';
import { of } from 'rxjs';

const authorizationServiceStub: Partial<AuthorizationService> = {
  isAuthenticated: () => of(true)
};

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthGuard,
        { provide: AuthorizationService, useValue: authorizationServiceStub }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should call isAuthenticated() on service', inject([AuthGuard], (guard: AuthGuard) => {
    const service = TestBed.get(AuthorizationService);
    spyOn(service, 'isAuthenticated').and.returnValue(of(null));
    guard.canActivate(null, null);
    expect(service.isAuthenticated).toHaveBeenCalled();
  }));

  it('should return true if isAuthenticated() returns true', inject([AuthGuard], (guard: AuthGuard) => {
    const service = TestBed.get(AuthorizationService);
    spyOn(service, 'isAuthenticated').and.returnValue(of(true));
    guard.canActivate(null, null).subscribe( result => {
      expect(result).toBe(true);
    });
  }));

  it('should return true if isAuthenticated() returns true', inject([AuthGuard], (guard: AuthGuard) => {
    const service = TestBed.get(AuthorizationService);
    spyOn(service, 'isAuthenticated').and.returnValue(of(true));
    guard.canActivate(null, null).subscribe( result => {
      expect(result).toBe(true);
    });
  }));

  it('should return false if isAuthenticated() returns false', inject([AuthGuard], (guard: AuthGuard) => {
    const service = TestBed.get(AuthorizationService);
    spyOn(service, 'isAuthenticated').and.returnValue(of(false));
    guard.canActivate(null, null).subscribe( result => {
      expect(result).toBe(false);
    });
  }));

});
