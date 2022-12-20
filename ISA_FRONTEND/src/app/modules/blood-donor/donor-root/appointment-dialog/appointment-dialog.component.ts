import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private bloodBankService: BloodBankService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  public dataSource = new MatTableDataSource<BloodDonationAppointment>();
  appointments : BloodDonationAppointment [] = [];
  displayedColumns: string[] = ['date', 'duration', 'make'];

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
      this.dataSource.data = this.appointments;
    })
  }

  makeAppointment(id:string): void{

  }

}
