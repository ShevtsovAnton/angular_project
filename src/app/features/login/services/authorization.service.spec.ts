import { AuthorizationService } from './authorization.service';
import { mockLocalStorage } from './local-storage.mock';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  beforeEach(() => {
    service = new AuthorizationService();
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should login', () => {
    spyOn(service.isLoggedInSubject, 'next');
    service.login('username');
    expect(service.isLoggedInSubject.next).toHaveBeenCalledWith(true);
  });

  it('should logout', () => {
    spyOn(service.isLoggedInSubject, 'next');
    service.logout();
    expect(service.isLoggedInSubject.next).toHaveBeenCalledWith(false);
  });

  it('should get user info from local storage', () => {
    service.login('username');
    const userInfo = service.getUserInfo();
    expect(userInfo).toBe('username');
  });
});
