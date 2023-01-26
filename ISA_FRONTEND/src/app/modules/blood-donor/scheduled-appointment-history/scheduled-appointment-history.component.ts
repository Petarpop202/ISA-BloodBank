import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-scheduled-appointment-history',
  templateUrl: './scheduled-appointment-history.component.html',
  styleUrls: ['./scheduled-appointment-history.component.css']
})
export class ScheduledAppointmentHistoryComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService,private loginService: LoginService,private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<CenterVisit>();
  appointments : CenterVisit [] = [];
  goodApp : CenterVisit[] = [];
  displayedColumns: string[] = ['date', 'duration', 'bank'];
  donor: BloodDonor = new BloodDonor;

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments(): void{
    this.loginService.whoAmI().subscribe(res=>{
      this.donor = res;
      this.bloodBankService.getAppointmentByDonorId(this.donor.id).subscribe(res=>{
        this.appointments = res;
        this.appointments.forEach(app => {
          app.bloodDonationAppointment.startDateTime = new Date(Number(app.bloodDonationAppointment.startDateTime[0]), Number(app.bloodDonationAppointment.startDateTime[1]) - 1, Number(app.bloodDonationAppointment.startDateTime[2]), Number(app.bloodDonationAppointment.startDateTime[3]), Number(app.bloodDonationAppointment.startDateTime[4]), 0).toISOString()
          if(app.hasReport)
            this.goodApp.push(app);
        })
        this.dataSource.data = this.goodApp;
      })
    })
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return compare(a.bloodDonationAppointment.startDateTime, b.bloodDonationAppointment.startDateTime, isAsc);
        case 'duration':
          return compare(a.bloodDonationAppointment.duration, b.bloodDonationAppointment.duration, isAsc);
        case 'bank':
          return compare(a.bloodDonationAppointment.bloodBank.name, b.bloodDonationAppointment.bloodBank.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

