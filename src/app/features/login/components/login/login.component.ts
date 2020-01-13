import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthorizationService) {}

  onSubmit(username: HTMLInputElement, password: HTMLInputElement): void {
    if (username.value && password.value) {
      this.authService.login(username.value, password.value);
      username.value = '';
      password.value = '';
    } else {
      alert('Please fill in the login and password fields');
    }
  }

}
