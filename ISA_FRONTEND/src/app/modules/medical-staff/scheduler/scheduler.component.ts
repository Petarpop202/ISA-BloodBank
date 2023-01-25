import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { UserService } from 'src/app/services/user.service';
import { StartAppointmentDialogComponent } from '../start-appointment-dialog/start-appointment-dialog.component';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  donors:BloodDonor[] = []
  donorValue: string = ''
  id : string | null | undefined;
  centerVisits : CenterVisit[] = [] 
  searchObject: CenterVisit[] = [] 
  searchInput:string = ''
  constructor(private donorService: UserService, private bloodBankService:BloodBankService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBloodDonors();
    this.getMedicineWorkerBloodBank()
  }

  public getMedicineWorkerBloodBank(): void {    
    this.bloodBankService.getMedicineWorkerBloodBank().subscribe(res => {
      this.id = res;
      this.getScheduledAppointmentsFromBloodBank(this.id);
    })
  }

  public getScheduledAppointmentsFromBloodBank(id:any) {
    this.bloodBankService.getBloodDonorsToReportByBank(id).subscribe(res => {
      this.centerVisits = res;
      this.searchObject = res;
      this.centerVisits.forEach(cv => {
        cv.bloodDonationAppointment.startDateTime = new Date(Number(cv.bloodDonationAppointment.startDateTime[0]), Number(cv.bloodDonationAppointment.startDateTime[1]) - 1, Number(cv.bloodDonationAppointment.startDateTime[2]), Number(cv.bloodDonationAppointment.startDateTime[3]), Number(cv.bloodDonationAppointment.startDateTime[4]), 0).toISOString()
      })
    })
  }

  getBloodDonors() : void {
    this.donorService.getDonors().subscribe(res=>{
        this.donors = res;
      })
  }

  startAppointment(id:string):void{
      const dialogRef = this.dialog.open(StartAppointmentDialogComponent, {
        data: {centerVisitId: id},
        height: '550px',
        width: '600px',
        //data: {name: this.name, animal: this.animal},
      });    
  
      dialogRef.afterClosed().subscribe(result => {
        this.getScheduledAppointmentsFromBloodBank(this.id);
      });
  }
  didntShowAppointment(id:string):void{
    this.donorService.didntShowAppointment(id).subscribe(res=>{
      //this.donors = res;
    })
  }
  rejectDonation(id:string):void{
    this.bloodBankService.updateHasReport(id).subscribe(res=>{
      //this.donors = res;
    })
  }

  resetFilters() {
    this.searchInput = '';
    this.filteredSportObjects();
  }

  filteredSportObjects() {
    return this.centerVisits.filter((sportsObject) => {
          return  sportsObject.bloodDonor.name.toLowerCase().match(this.searchInput.toLowerCase()) ||
                          sportsObject.bloodDonor.surname.toLowerCase().match(this.searchInput.toLowerCase());
    })
  }
}
