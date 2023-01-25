import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { CenterVisit } from 'src/app/model/centerVisit';
import { CenterVisitDto } from 'src/app/model/centerVisitDto';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-scheduled-appointments',
  templateUrl: './scheduled-appointments.component.html',
  styleUrls: ['./scheduled-appointments.component.css']
})
export class ScheduledAppointmentsComponent implements OnInit {

  constructor(private bloodBankService: BloodBankService,private loginService: LoginService) { }
  public dataSource = new MatTableDataSource<CenterVisit>();
  appointments : CenterVisit [] = [];
  displayedColumns: string[] = ['date', 'duration', 'make'];
  donor: BloodDonor = new BloodDonor;
  appDto : CenterVisitDto = new CenterVisitDto;

  ngOnInit(): void {
    this.getAllAppointments()
  }

  getAllAppointments(): void{
    this.loginService.whoAmI().subscribe(res=>{
      this.donor = res;
      this.bloodBankService.getAppointmentByDonorId(this.donor.id).subscribe(res=>{
        this.appointments = res;
        this.appointments.forEach(app => {
          app.bloodDonationAppointment.startDateTime = new Date(Number(app.bloodDonationAppointment.startDateTime[0]), Number(app.bloodDonationAppointment.startDateTime[1]) - 1, Number(app.bloodDonationAppointment.startDateTime[2]), Number(app.bloodDonationAppointment.startDateTime[3]), Number(app.bloodDonationAppointment.startDateTime[4]), 0).toISOString()
        })
        this.dataSource.data = this.appointments;
      })
    })
  }

  deleteAppointment(id:string):void{
    this.appDto.donorId = this.donor.id;
    this.bloodBankService.getVisitById(id).subscribe(res=>{
      this.appDto.appointmentId = res.bloodDonationAppointment.id;
      this.appDto.isCanceled = true;
      this.appDto.id = id;
      this.bloodBankService.deleteVisitCenter(this.appDto).subscribe(res=>{
        if(res != null)
          alert("Uspesno otkazan termin !")
        else alert("Termin je za manje od 24h")
      })
    })

  }
}
