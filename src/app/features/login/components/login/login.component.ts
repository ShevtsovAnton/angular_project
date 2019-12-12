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
      this.authService.login(username.value);
      console.log(`username: ${username.value}, password: ${password.value}`);
      username.value = '';
      password.value = '';
    } else {
      console.log('Please fill in the login and password fields');
    }
  }

}
