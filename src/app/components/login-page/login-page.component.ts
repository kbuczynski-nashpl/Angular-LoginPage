import { Component, OnInit }       from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { faGoogle }                from "@fortawesome/free-brands-svg-icons";

@Component(
  {
    selector:    'login-page',
    templateUrl: './login-page.component.html',
    styleUrls:   ['./login-page.component.scss']
  }
)
export class LoginPageComponent implements OnInit {
  email: FormControl;
  password: string;
  hide: boolean;
  rememberPassoword: boolean;

  faGoogle = faGoogle;

  constructor() {
  }

  ngOnInit(): void {
    this.hide  = true;
    this.rememberPassoword = false;
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
