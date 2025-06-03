import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData = {email: '', password: ''};
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService){}

  onSignup(){
    this.successMessage = '';
    this.errorMessage = '';

    const {email, password} = this.signupData;
    this.authService.signUp(email, password).subscribe({
      next:()=>{
        this.successMessage = 'Registration successful! Please login.';

        this.signupData = {email: '', password: ''};
      },
      error:(err)=>{
        this.errorMessage = err.error?.message || 'Sign up failed. Please try again.'
      }
    });
  }
}
