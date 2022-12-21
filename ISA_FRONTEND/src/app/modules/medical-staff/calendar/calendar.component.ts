import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodBankService } from 'src/app/services/blood-bank.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  id : string | null | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService:BloodBankService) { }
  centerVisits : CenterVisit[] = []

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getScheduledAppointmentsFromBloodBank(this.id);
    
  }

  public getScheduledAppointmentsFromBloodBank(id:any) {
    this.bloodBankService.getAppointmentsByBloodBankId(id).subscribe(res => {
      this.centerVisits = res;
      this.centerVisits.forEach(cv => {
        cv.bloodDonationAppointment.startDateTime = new Date(Number(cv.bloodDonationAppointment.startDateTime[0]), Number(cv.bloodDonationAppointment.startDateTime[1]) - 1, Number(cv.bloodDonationAppointment.startDateTime[2]), Number(cv.bloodDonationAppointment.startDateTime[3]), Number(cv.bloodDonationAppointment.startDateTime[4]), 0).toISOString()
      })
    })
  }
}
