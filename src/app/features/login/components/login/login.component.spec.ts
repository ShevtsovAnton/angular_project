import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear the fields after submit', () => {
    debugElement = fixture.debugElement;
    const loginInput: HTMLInputElement = debugElement.query(By.css('input[type="text"]')).nativeElement;
    const passwordInput: HTMLInputElement = debugElement.query(By.css('input[type="password"]')).nativeElement;
    loginInput.value = 'Adam';
    passwordInput.value = 'West';
    component.onSubmit(loginInput, passwordInput);
    expect(loginInput.value).toBe('');
  });
});
