import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  signUp(email: string, password:string){
    const body = {email, password};
    return this.http.post(`${environment.apiUrl}/api/user/signup`, body);
  }

  signIn(email: string, password:string){
    const body = {email, password};
    return this.http.post<{token: string}>(`${environment.apiUrl}/api/user/signin`, body);
  }

  signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  isSignedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
