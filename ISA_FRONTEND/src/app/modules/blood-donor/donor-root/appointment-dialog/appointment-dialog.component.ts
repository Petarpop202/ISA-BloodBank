import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { CenterVisitDto } from 'src/app/model/centerVisitDto';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private loginService:LoginService,private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<BloodDonationAppointment>();
  appointments : BloodDonationAppointment [] = [];
  displayedColumns: string[] = ['date', 'duration', 'make'];
  donor: BloodDonor = new BloodDonor;
  visit: CenterVisitDto = new CenterVisitDto;
  app: BloodDonationAppointment = new BloodDonationAppointment;

  ngOnInit(): void {
    this.getAllAppointments();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getAllAppointments(): void{
    this.bloodBankService.getAppointmentsFromBloodBank(this.data.bankId).subscribe(res=>{
      this.appointments = res;
      this.appointments.forEach(app => {
        app.startDateTime = new Date(Number(app.startDateTime[0]), Number(app.startDateTime[1]) - 1, Number(app.startDateTime[2]), Number(app.startDateTime[3]), Number(app.startDateTime[4]), 0).toISOString()
      })
      this.dataSource.data = this.appointments;
      this.dataSource.sort = this.sort;

    })
  }

  sortData(event:Sort) {
    this.dataSource.data = this.dataSource.data.sort((a, b) => {
      return a.startDateTime> b.startDateTime ? 1 : -1;
    })
  }

  makeAppointment(id:string): void{
    this.loginService.whoAmI().subscribe(res=>{
      this.donor = res;
      this.visit.donorId = this.donor.id;
      this.visit.appointmentId = id;
      this.visit.price = 1300;
      this.createApp();
      })
  }

  createApp():void{
    this.bloodBankService.createVisit(this.visit).subscribe(res=>{
      if(res != null)
        alert("Uspesno kreiran " + res.bloodDonor.name);
      else alert("Korisnik nema popunjenu anketu!")
    })
  }
}
