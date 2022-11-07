import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // ovo je nako napravljeno bezveze
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHost + 'api/User', {headers: this.headers});
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.apiHost + 'test/get', {headers: this.headers});
  }
}
