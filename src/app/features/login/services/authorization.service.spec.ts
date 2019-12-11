import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorizationService } from './authorization.service';
import { mockLocalStorage } from './local-storage.mock';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

describe('AuthorizationService', () => {
  const router = jasmine.createSpyObj('Router', ['navigate']);
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = new AuthorizationService(router, null);
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should logout', () => {
    spyOn(service.isLoggedInSubject, 'next').and.returnValue(of(null));
    service.logout();
    expect(service.isLoggedInSubject.next).toHaveBeenCalledWith(false);
  });

  it('should not get user info if user is not logged in', () => {
    const unathurizedUserInfo = service.getUserInfo();
    expect(unathurizedUserInfo).toBe(undefined);
  });

  it('should  get user info if user is logged in', () => {
    localStorage.setItem('userInfo', 'loggedIn');
    const athurizedUserInfo = service.getUserInfo();
    expect(athurizedUserInfo).toBeTruthy();
  });
});
