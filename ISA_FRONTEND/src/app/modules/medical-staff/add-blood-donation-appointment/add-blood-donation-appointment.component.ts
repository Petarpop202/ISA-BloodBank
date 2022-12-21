import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BloodBank } from 'src/app/model/bloodBank';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';

@Component({
  selector: 'app-add-blood-donation-appointment',
  templateUrl: './add-blood-donation-appointment.component.html',
  styleUrls: ['./add-blood-donation-appointment.component.css']
})
export class AddBloodDonationAppointmentComponent implements OnInit {

  id : string | null | undefined
  bloodBank: BloodBank = new BloodBank
  appointment: BloodDonationAppointment = new BloodDonationAppointment
  appointments: BloodDonationAppointment[] = []
  selectedDate: Date = new Date()
  hours: number = 0
  minutes: number = 0
  duration: number = 10
  error?: String
  dateError?: String
  timeError?: String
  
  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getBloodBank(this.id);
  }

  getBloodBank(id:any): void {
    this.bloodBankService.getBloodBank(id).subscribe(res => {
      this.bloodBank = res;
    })
  }

  getAppointments() {
    this.bloodBankService.getAppointmentsFromBloodBank(this.id).subscribe(res => {
      this.appointments = res
    })
  }

  createAppointment(): void {
    if(this.validateInput()){
      console.log(this.appointment)
      this.bloodBankService.createBloodDonationAppointment(this.appointment).subscribe(res => {
        if (res == null){
          this.error = 'Termin se preklapa sa postojećim terminom!'
        }else{
          this.error = ''
          this.appointment = res;
          console.log(this.appointment)
          this.location.back()
        }
      })
    }
  }

  validateInput(): boolean{
    let selectedDate = new Date(this.selectedDate)

    this.dateError = ''
    this.timeError = ''

    if(selectedDate.getTime() < Date.now()){
      this.dateError = 'Datum ne može biti u prošlosti!'
      return false;
    } else if(!this.isInWorkTime()){
        this.timeError = "Termin je izvan radnog vremena!"
        return false;
    }
    this.appointment.startDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), this.hours + 1, this.minutes, 0).toISOString()
    this.appointment.duration = this.duration
    this.appointment.bloodBank = this.bloodBank
    return true;
  }

  isInWorkTime() : boolean {
    let workStartTime = this.bloodBank.workTimeStart
    let workEndTime = this.bloodBank.workTimeEnd

    let appStartTime = [this.hours, this.minutes]
    let appEndTime = [this.hours, this.minutes + this.duration]

    if (this.minutes + this.duration >= 60)
      appEndTime = [this.hours + 1, this.minutes + this.duration - 60]

    if (appStartTime[0] < parseInt(workStartTime[0]) || appEndTime[0] >= parseInt(workEndTime[0]))
      return false;
    else if (appStartTime[0] === parseInt(workStartTime[0])){
      if (appStartTime[1] >= parseInt(workStartTime[1]))
        return true;
        return false;
    }
    else
      return true;
  }
}
