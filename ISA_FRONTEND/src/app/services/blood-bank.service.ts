import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from '../model/bloodBank';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'bloodBank/get', {headers: this.headers});
  }

  getBloodBank(id: any): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + 'bloodBank/get/' + id, {headers: this.headers});
  }
}