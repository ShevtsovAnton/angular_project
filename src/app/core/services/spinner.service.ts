import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject<boolean>(false);
  public spinnerObservable = this.spinnerSubject.asObservable();

  changeSpinnerStateValue(isShow: boolean) {
    this.spinnerSubject.next(isShow);
  }
}
