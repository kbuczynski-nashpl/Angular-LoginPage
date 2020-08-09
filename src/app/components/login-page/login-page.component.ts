import { Component, OnInit }             from '@angular/core';
import { Form, FormControl, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig }    from "@angular/material/dialog";
import { TermCondDialogComponent }       from "../term-cond-dialog/term-cond-dialog.component";


@Component(
  {
    selector:    'login-page',
    templateUrl: './login-page.component.html',
    styleUrls:   ['./login-page.component.scss'],
  }
)
export class LoginPageComponent implements OnInit {
  loginEmail: FormControl;
  signupEmail: FormControl;
  loginPassword: FormControl;
  signupPassword: FormControl;
  reSignupPassword: FormControl;
  signupDatepickerDob: FormControl;
  password: string;
  hide: boolean;
  rehide: boolean;
  rememberPassword: boolean;
  tc: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.hide             = true;
    this.rehide           = true;
    this.rememberPassword = false;
    this.tc               = false;

    this.loginEmail = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.signupEmail = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.loginPassword = new FormControl('', [
      Validators.required
    ]);

    this.signupPassword = new FormControl('', [
      Validators.required
    ]);

    this.reSignupPassword = new FormControl('', [
      Validators.required
    ]);

    this.signupDatepickerDob = new FormControl('', [
      Validators.required
    ]);
  }

  /**
   * return error message for login email input
   *
   */
  getLoginEmailErrorMessage(): string {
    if (this.loginEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginEmail.hasError('email') ? 'Not a valid email' : '';
  }

  /**
   * return error message for signup email input
   */
  getSignupEmailErrorMessage(): string {
    if (this.signupEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signupEmail.hasError('email') ? 'Not a valid email' : '';
  }

  getLoginPasswordErrorMessage(): string {
    return this.loginPassword.hasError('required') ? 'You must enter a value' : '';
  }

  getSignupPasswordErrorMessage(): string {
    return this.signupPassword.hasError('required') ? 'You must enter a value' : '';
  }

  getSignupRePasswordErrorMessage(): string {
    return this.reSignupPassword.hasError('required') ? 'You must enter a value' : '';
  }

  getSignupDatepickerDobErrorMessage(): string {
    return this.signupDatepickerDob.hasError('required') ? 'You must enter a date' : '';
  }

  /**
   * Open Dialog with T&C condition component
   */
  openTCDialog(): void {
    const dialog     = new MatDialogConfig();
    dialog.autoFocus = false;

    this.dialog.open(TermCondDialogComponent, dialog);
  }
}
