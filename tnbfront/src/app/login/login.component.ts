import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isValid: Boolean;
  successRegistre;
  signUpForm: FormGroup;
  loginForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.isValid = true;
    this.successRegistre = false;
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['CLIENT']
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const {email, password, lastName, firstName, role} = this.signUpForm.value;
      this.authService.signUp(email, password, lastName, firstName, role).subscribe(
        (response) => {
          this.router.navigate(['/home']);

          console.log('Sign-up successful:', response);
          this.successRegistre = true;
        },
        (error) => {

          console.error('Sign-up error:', error);
        }
      );
    } else {
      this.isValid = false
    }
  }

  loginFailed: boolean = false;


  login() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      this.authService.signIn(email, password).subscribe(
        (response) => {
          this.router.navigate(['/home']);

          console.log('Sign-in successful:', response);
          this.successRegistre = true;
        },
        (error) => {

          console.error('Sign-in error:', error);
        }
      );
    } else {
      this.isValid = false
    }
  }

}
