import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { MedicineStaff } from 'src/app/model/medicineStaff';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-blood-center',
  templateUrl: './blood-center.component.html',
  styleUrls: ['./blood-center.component.css']
})
export class BloodCenterComponent implements OnInit {

  id : string | null | undefined;
  bloodBanks: BloodBank[] = [];
  bloodBank: BloodBank = new BloodBank;
  medicineStaff : MedicineStaff[] = []
  todoFree : MedicineStaff[] = []
  appointments : BloodDonationAppointment[] = []

  constructor(private bloodBankService:BloodBankService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getBloodBank(this.id);
    this.getMedicineStaffFromBloodBank(this.id);
    this.getAppointmentFromBloodBank(this.id);
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

  public numSequence(n: any): Array<number> {
    return Array(n);
  }

  public goToMyBank(): void {
    
  }
}
