import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from '../../store/auth.actions';
import { AppState } from 'src/app/core/store/app-store.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private store: Store<AppState>
    ) {}

  onSubmit(username: HTMLInputElement, password: HTMLInputElement): void {
    if (username.value && password.value) {
      this.store.dispatch(loginRequest({ login: username.value, password: password.value }));
      username.value = '';
      password.value = '';
    } else {
      alert('Please fill in the login and password fields');
    }
  }

}
