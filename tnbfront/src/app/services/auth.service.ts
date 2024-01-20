import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8888/SERVICE-AUTH/api';

  constructor(private http: HttpClient,private router: Router) { }

  signUp( email: string, password: string, lastName: string, firstName: string, role: string): Observable<any> {
    const signUpData = { email, password, lastName, firstName, role };
    return this.http.post(`${this.apiUrl}/auth/register`, signUpData);
  }

  signIn(username: string, password: string): Observable<any> {
    const signInData = {  email: username, password: password};

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Vary': 'Access-Control-Request-Method, Access-Control-Request-Headers, Origin',
      'X-Content-Type-Options': 'nosniff',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Frame-Options': 'DENY',
    });

    return this.http.post(`${this.apiUrl}/auth/authenticate`, signInData).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('username', response.username);
      }),
      catchError((error: any) => {
        // Gérez l'erreur ici, par exemple, imprimez-la dans la console
        console.error('Erreur lors de la connexion :', error);
        // Renvoyez une nouvelle Observable avec l'erreur propagée
        return throwError(error);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  signOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.router.navigate(['/']);

  }




}
