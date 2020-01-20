import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { loginRequest } from '../../store/auth.actions';
import { AppState } from 'src/app/core/store/app-store.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    ) {
      this.loginForm = this.fb.group({
        login: ['flastname', [
          Validators.required
        ]],
        password: ['flastname', [
          Validators.required
        ]]
      });
    }

  onSubmit(event, value: { login: string, password: string}): void {
      event.preventDefault();
      
      this.store.dispatch(loginRequest(value));
  }

  public get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}
