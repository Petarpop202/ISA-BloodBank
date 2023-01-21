import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from '../model/bloodBank';
import { BloodDonationAppointment } from '../model/bloodDonationAppointment';
import { CenterVisit } from '../model/centerVisit';
import { MedicineStaff } from '../model/medicineStaff';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  apiHost: string = 'http://localhost:8081/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'bloodBank/get');
  }

  getBloodBank(id: any): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + 'bloodBank/get/' + id, {headers: this.headers});
  }

  getMedicineStaffFromBloodBank(id: any): Observable<MedicineStaff[]> {
    return this.http.get<MedicineStaff[]>(this.apiHost + 'MedicineStaff/getMedicineStaffFromBloodBank/' + id, {headers: this.headers});
  }

  getAppointment(id: any): Observable<BloodDonationAppointment> {
    return this.http.get<BloodDonationAppointment>(this.apiHost + 'bloodDonationAppointment/get/' + id, {headers: this.headers});
  }

  getAppointmentsFromBloodBank(id: any): Observable<BloodDonationAppointment[]> {
    return this.http.get<BloodDonationAppointment[]>(this.apiHost + 'bloodDonationAppointment/bloodBank=' + id, {headers: this.headers});
  }

  getFreeAppointmentsFromBloodBank(id: any): Observable<BloodDonationAppointment[]> {
    return this.http.get<BloodDonationAppointment[]>(this.apiHost + 'bloodDonationAppointment/bloodBankFree=' + id, {headers: this.headers});
  }

  getAppointmentsByDateTime(datetime: string): Observable<BloodDonationAppointment[]> {
    return this.http.get<BloodDonationAppointment[]>(this.apiHost + 'bloodDonationAppointment/datetime=' + datetime, {headers: this.headers});
  }

  createBloodDonationAppointment(bloodDonationAppointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'bloodDonationAppointment/new', bloodDonationAppointment);
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

  createVisit(centerVisit: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'centerVisit/new', centerVisit);
  }

  getAppointmentByDonorId(id: any): Observable<CenterVisit[]> {
    return this.http.get<CenterVisit[]>(this.apiHost + 'centerVisit/getByDonor/' + id, {headers: this.headers});
  }

  getVisitById(id: any): Observable<CenterVisit> {
    return this.http.get<CenterVisit>(this.apiHost + 'centerVisit/get/' + id, {headers: this.headers});
  }

  getAppointmentsByBloodBankId(id: any): Observable<CenterVisit[]> {
    return this.http.get<CenterVisit[]>(this.apiHost + 'centerVisit/getByBank/' + id, {headers: this.headers});
  }

  deleteVisitCenter(object: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'centerVisit/delete', object);
  }
}
