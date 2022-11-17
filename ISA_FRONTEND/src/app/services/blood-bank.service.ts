import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from '../model/bloodBank';
import { MedicineStaff } from '../model/medicineStaff';

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

  getMedicineStaffFromBloodBank(id: any): Observable<MedicineStaff[]> {
    return this.http.get<MedicineStaff[]>(this.apiHost + 'MedicineStaff/getMedicineStaffFromBloodBank/' + id, {headers: this.headers});
  }

  updateBloodBank(bloodBank: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'bloodBank/update', bloodBank);
  }

  createBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'bloodBank/new', bloodBank);
  }

  isNameUnique(name: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiHost + 'bloodBank/checkName=' + name, {headers: this.headers});
  }
}
