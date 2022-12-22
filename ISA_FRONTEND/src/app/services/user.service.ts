import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { BloodDonor } from "../model/bloodDonor"
import { Test } from '../model/test';
import { MedicineStaff } from '../model/medicineStaff';
import { DonorSurvey } from '../model/donorSurvey';
import { SystemAdministrator } from '../model/systemAdministrator';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // ovo je nako napravljeno bezveze
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHost + 'user/get', {headers: this.headers});
  }

  getDonors(): Observable<BloodDonor[]> {
    return this.http.get<BloodDonor[]>(this.apiHost + 'user/get', {headers: this.headers});
  }

  getUser(id: any): Observable<BloodDonor> {
    return this.http.get<BloodDonor>(this.apiHost + 'user/get/' + id, {headers: this.headers});
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.apiHost + 'test/get', {headers: this.headers});
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'auth/signup', user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'user/update', user);
  }

  getSurveyByDonor(id: any): Observable<DonorSurvey> {
    return this.http.get<DonorSurvey>(this.apiHost + 'user/survey/' + id, {headers: this.headers});
  }

  createSurvey(survey: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'user/createSurvey', survey);
  }

  getMedicineStaff(id: number): Observable<MedicineStaff> {
    return this.http.get<MedicineStaff>(this.apiHost + 'MedicineStaff/get/' + id, {headers: this.headers});
  }

  createMedicineStaff(bloodDonationAppointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'MedicineStaff/new',bloodDonationAppointment);
  }

  createSystemAdministrator(bloodDonationAppointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'systemAdministrator/new',bloodDonationAppointment);
  }

  systemAdministratorChangePassword(id: any, password: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'systemAdministrator/update/id=' + id + '+pw=' + password, {headers: this.headers});
  }

  getSystemAdministratorById(id: any): Observable<any>{
    return this.http.get<SystemAdministrator>(this.apiHost + 'systemAdministrator/get/' + id, {headers: this.headers})
  }

  updateMedicineStaff(user: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'MedicineStaff/update', user);
  }

  findByNameAndSurname(name: string, surname: string): Observable<BloodDonor[]>{
    return this.http.get<BloodDonor[]>(this.apiHost + 'user/findByNameAndSurname/name=' + name + '+surname=' + surname, {headers: this.headers});
  }
}
