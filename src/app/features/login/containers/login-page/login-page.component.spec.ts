import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HeaderMockComponent } from 'src/app/shared/components/header/header.component.mock';
import { BreadcrumbsMockComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component.mock';
import { LoginMockComponent } from '../../components/login/login.component.mock';
import { FooterMockComponent } from 'src/app/shared/components/footer/footer.component.mock';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
        HeaderMockComponent,
        BreadcrumbsMockComponent,
        LoginMockComponent,
        FooterMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
