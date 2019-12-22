import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { AuthGuard } from './auth.guard';

import { of } from 'rxjs';

describe('AuthGuard', () => {

  let store: MockStore<{ auth: { isAuthenticated: boolean }}>;
  let guard: AuthGuard;
  const initialState = { auth: { isAuthenticated: false } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
      ]
    });

    store = TestBed.get(Store);
    guard = TestBed.get(AuthGuard);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  // it('should call isAuthenticated() on service', inject([AuthGuard], (guard: AuthGuard) => {
  //   const service = TestBed.get(AuthorizationService);
  //   spyOn(service, 'isAuthenticated').and.returnValue(of(null));
  //   guard.canActivate(null, null);
  //   expect(service.isAuthenticated).toHaveBeenCalled();
  // }));

  // it('should return true if isAuthenticated() returns true', () => {
  //   // const service = TestBed.get(AuthorizationService);
  //   // spyOn(service, 'isAuthenticated').and.returnValue(of(true));
  //   store.setState({ auth: { isAuthenticated: true } });
  //   const expected = cold('(a|)', { a: true});
  //   expect(guard.canActivate(null, null)).toBeObservable(expected);
  //   getTestScheduler().flush();
  // });


  // it('should return true if isAuthenticated() returns true', inject([AuthGuard], (guard: AuthGuard) => {
  //   const service = TestBed.get(AuthorizationService);
  //   spyOn(service, 'isAuthenticated').and.returnValue(of(true));
  //   guard.canActivate(null, null).subscribe( result => {
  //     expect(result).toBe(true);
  //   });
  // }));

  // it('should return false if isAuthenticated() returns false', inject([AuthGuard], (guard: AuthGuard) => {
  //   const service = TestBed.get(AuthorizationService);
  //   spyOn(service, 'isAuthenticated').and.returnValue(of(false));
  //   guard.canActivate(null, null).subscribe( result => {
  //     expect(result).not.toBe(true);
  //   });
  // }));

});
