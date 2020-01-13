import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
