import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ConstSettings } from '../model/const-settings';
import { Jwt } from '../model/jwt';
import { LoginDto } from '../model/loginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private readonly router: Router, private readonly jwtHelper: JwtHelperService) { }

  private redirectToMainPage = () =>
  {
    var roleLandingPages = new Map<string, string>([
      ['ROLE_DONOR', 'donor'],
      ['ROLE_ADMIN', 'admin'],
      ['ROLE_MEDICALWORKER','medicalworker']
    ]);

      const token = localStorage.getItem('jwt');
      const tokenPayload = this.jwtHelper.decodeToken(token!);
      const role = tokenPayload.roles;

      this.router.navigate([roleLandingPages.get(role)]);         
  }

  public login = (loginCredentials: LoginDto): void => {


    this.http.post<any>(ConstSettings.apiHost + 'auth/login', loginCredentials, {
           headers: ConstSettings.standardHeader,
       })
       .subscribe({
     next: (response) =>{
       localStorage.setItem('jwt', response.jwt);
       this.redirectToMainPage();
     },
     //TODO: handle errors
     error: err => {
       alert(err.message);
     }  
   }
   );
}

whoAmI(): Observable<any> {
  return this.http.get<any>(ConstSettings.apiHost + 'auth/whoami');
}


public logout = () =>
{
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
}
}
