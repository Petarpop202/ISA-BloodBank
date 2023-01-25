import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { BloodAmount } from 'src/app/model/bloodAmount';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { CenterVisit } from 'src/app/model/centerVisit';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-blood-center',
  templateUrl: './blood-center.component.html',
  styleUrls: ['./blood-center.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BloodCenterComponent implements OnInit {

  id : string | null | undefined;
  bloodBanks: BloodBank[] = [];
  bloodBank: BloodBank = new BloodBank;
  medicineStaff : MedicineStaff[] = []
  todoFree : MedicineStaff[] = []
  appointments : BloodDonationAppointment[] = []
  centerVisits : CenterVisit[] = [] 
  bloodAmountInBank: BloodAmount[] = []

  constructor(private loginService:LoginService, private bloodBankService:BloodBankService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id')
    this.getMedicineWorkerBloodBank()
    
  }
  
  public getMedicineWorkerBloodBank(): void {    
    this.bloodBankService.getMedicineWorkerBloodBank().subscribe(res => {
      this.id = res;
      this.getBloodBank(this.id);
      this.getMedicineStaffFromBloodBank(this.id);
      this.getAppointmentFromBloodBank(this.id);
      this.getScheduledAppointmentsFromBloodBank(this.id);
      this.getBloodAmountByBank(this.id);
    })
  }

  public getBloodBank(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  public getMedicineStaffFromBloodBank(id:any) {
    this.bloodBankService.getMedicineStaffFromBloodBank(id).subscribe(res => {
      this.medicineStaff = res;
    })
  }

  public getAppointmentFromBloodBank(id:any) {
    this.bloodBankService.getAppointmentsFromBloodBank(id).subscribe(res => {
      this.appointments = res;
      this.appointments.forEach(app => {
        app.startDateTime = new Date(Number(app.startDateTime[0]), Number(app.startDateTime[1]) - 1, Number(app.startDateTime[2]), Number(app.startDateTime[3]), Number(app.startDateTime[4]), 0).toISOString()
      })
    })
  }

  public getScheduledAppointmentsFromBloodBank(id:any) {
    this.bloodBankService.getAppointmentsByBloodBankId(id).subscribe(res => {
      this.centerVisits = res;
      this.centerVisits.forEach(cv => {
        cv.bloodDonationAppointment.startDateTime = new Date(Number(cv.bloodDonationAppointment.startDateTime[0]), Number(cv.bloodDonationAppointment.startDateTime[1]) - 1, Number(cv.bloodDonationAppointment.startDateTime[2]), Number(cv.bloodDonationAppointment.startDateTime[3]), Number(cv.bloodDonationAppointment.startDateTime[4]), 0).toISOString()
      })
    })
  }

  public getBloodAmountByBank(id:any) {
    this.bloodBankService.getBloodAMountByBank(id).subscribe(res => {
      this.bloodAmountInBank = res;
    })
  }

  public numSequence(n: any): Array<number> {
    return Array(n);
  }

  public goToMyBank(): void {
    
  }

  sortData(sort: Sort) {
    const data = this.centerVisits.slice();
    if (!sort.active || sort.direction === '') {
      this.centerVisits = data;
      return;
    }

    this.centerVisits = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.bloodDonor.name, b.bloodDonor.name, isAsc);
        case 'calories':
          return compare(a.bloodDonationAppointment.startDateTime, b.bloodDonationAppointment.startDateTime, isAsc);
        case 'fat':
          return compare(a.bloodDonationAppointment.duration, b.bloodDonationAppointment.duration, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
