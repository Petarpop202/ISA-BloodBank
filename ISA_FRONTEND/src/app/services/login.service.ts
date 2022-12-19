import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
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
      ['Doctor', 'doctor'],
      ['Manager', 'manager']

    ]);

      const token = localStorage.getItem('jwt');
      const tokenPayload = this.jwtHelper.decodeToken(token!);
      const role = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      this.router.navigate([roleLandingPages.get(role)]);         
  }

  public login = (loginCredentials: LoginDto): void => {


    this.http.post<Jwt>(ConstSettings.apiHost + 'auth/login', loginCredentials, {
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


public logout = () =>
{
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
}
}
