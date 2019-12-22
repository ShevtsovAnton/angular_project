import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorizationService } from './authorization.service';
import { mockLocalStorage } from './local-storage.mock';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { UserModel } from '../models/user.model';

const USER_INFO_PATH = 'http://localhost:3004/auth/userinfo';
const userMock: UserModel = {
    id: null,
    fakeToken: null,
    name: {
      first: null,
      last: null,
    },
    login: null,
    password: null
};

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.get(AuthorizationService);
    httpMock = TestBed.get(HttpTestingController);
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  // it('getUserInfo() should call http post', () => {
  //   service.getUserInfo().subscribe((data) => {
  //     expect(data).toBe(userMock);
  //   });
  //   const req = httpMock.expectOne(`${ USER_INFO_PATH }`);
  //   expect(req.request.method).toEqual('POST');
  //   req.flush(userMock);
  //   httpMock.verify();
  // });

  // it('should logout', () => {
  //   spyOn(service.isLoggedInSubject, 'next').and.returnValue(of(false));
  //   service.logout();
  //   expect(service.isLoggedInSubject.next).toHaveBeenCalledWith(false);
  // });
});
