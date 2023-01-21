import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BloodBank } from 'src/app/model/bloodBank';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { Sort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';
import { DonorSurvey } from 'src/app/model/donorSurvey';
import { LoginService } from 'src/app/services/login.service';
import { CenterVisit } from 'src/app/model/centerVisit';
import { BloodDonor } from 'src/app/model/bloodDonor';
import { CenterVisitDto } from 'src/app/model/centerVisitDto';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  id : string | null | undefined
  bloodBank: BloodBank = new BloodBank
  appointment: BloodDonationAppointment = new BloodDonationAppointment
  appointments: BloodDonationAppointment[] = []
  selectedDate: Date = new Date()
  minDate: Date = new Date()
  hours: number = 0
  minutes: number = 0
  appointmentDate: Date = new Date()
  error?: String
  dateError?: String
  timeError?: String
  survey?: DonorSurvey

  donor: BloodDonor = new BloodDonor()
  
  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private bloodBankService: BloodBankService, private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getSurvey()
  }

  getAppointments(): void {
    this.bloodBankService.getAppointmentsByDateTime(this.appointmentDate.toISOString()).subscribe(res => {
      this.appointments = res
      this.appointments.forEach(app => {
        app.startDateTime = new Date(Number(app.startDateTime[0]), Number(app.startDateTime[1]) - 1, Number(app.startDateTime[2]), Number(app.startDateTime[3]), Number(app.startDateTime[4]), 0).toISOString()
      })
      this.bloodBankService.getBloodBanks().subscribe(res => {
        let bloodbanks = res
        let freeBloodbanks = res
        bloodbanks.forEach(bb => {
          this.appointments.forEach(app => {
            if (app.bloodBank.id === bb.id){
              freeBloodbanks = freeBloodbanks.filter(fbb => fbb.id !== bb.id)
              console.log(bb.name)
            }
          })
        })
        this.createAppointments(freeBloodbanks)
      })
    })
  }

  createAppointments(bloodbanks: BloodBank[]): void {
    bloodbanks.forEach(bb => {
      let newAppointment = new BloodDonationAppointment()
      let selectedDate = new Date(this.selectedDate)
      newAppointment.bloodBank = bb
      newAppointment.duration = 30
      newAppointment.startDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), this.hours, this.minutes, 0).toISOString()
      newAppointment.free = true
      this.appointments.push(newAppointment)
    })
  }

  getScheduledAppointments(): void {
    this.bloodBankService.getAppointmentByDonorId(this.donor.id).subscribe(res => {
      if (res == null) {
        this.minDate = new Date()
        return
      }

      let scheduledAppointments: CenterVisit[] = res
      let pastAppointments: CenterVisit[] = []
      scheduledAppointments.forEach(app => {
        if (new Date(Number(app.bloodDonationAppointment.startDateTime[0]), Number(app.bloodDonationAppointment.startDateTime[1]) - 1, Number(app.bloodDonationAppointment.startDateTime[2]), Number(app.bloodDonationAppointment.startDateTime[3]), Number(app.bloodDonationAppointment.startDateTime[4]), 0) <= new Date()){
          pastAppointments.push(app)
        }
      })

      if (!pastAppointments.length)
        return

      let appDate = pastAppointments[0].bloodDonationAppointment.startDateTime
      let maxDate = new Date(Number(appDate[0]), Number(appDate[1]) - 1, Number(appDate[2]), Number(appDate[3]), Number(appDate[4]), 0)

      pastAppointments.forEach(app => {
        if (new Date(app.bloodDonationAppointment.startDateTime) > maxDate){
          let appDate = app.bloodDonationAppointment.startDateTime
          maxDate = new Date(Number(appDate[0]), Number(appDate[1]) - 1, Number(appDate[2]), Number(appDate[3]), Number(appDate[4]), 0)
        }
      })
      let newDate = new Date(maxDate.setMonth(maxDate.getMonth() + 6))
      if (newDate > this.minDate){
        this.minDate = newDate
      }
    })
  }

  getSurvey(): void {
    this.loginService.whoAmI().subscribe(res => {
      this.donor = res
      this.userService.getSurveyByDonor(this.donor.id).subscribe(res => {
        this.survey = res
      })
      this.getScheduledAppointments()
    })
  }

  searchAppointments(): void {
    let selectedDate = new Date(this.selectedDate)
    this.appointmentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), this.hours + 1, this.minutes, 0)
    this.getAppointments()
  }

  scheduleAppointment(appointment: BloodDonationAppointment): void {
    if (appointment.id === ''){
      let selectedDate = new Date(this.selectedDate)
      appointment.startDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), this.hours + 1, this.minutes, 0).toISOString()
      this.bloodBankService.createBloodDonationAppointment(appointment).subscribe(res => {
        if (res !== null){
          appointment = res
          this.createCenterVisit(appointment);
        }
      })
    }
    else {
      this.createCenterVisit(appointment)
    }
  }
  createCenterVisit(appointment: BloodDonationAppointment): void {
    let centerVisit: CenterVisitDto = new CenterVisitDto()
    centerVisit.appointmentId = appointment.id
    centerVisit.donorId = this.donor.id
    centerVisit.price = 0

    this.bloodBankService.createVisit(centerVisit).subscribe(res => {
      alert('Uspešno zakazan termin!')
    })
  }

  sortData(sort: Sort) {
    const data = this.appointments.slice();
    if (!sort.active || sort.direction === '') {
      this.appointments = data;
      return;
    }

    this.appointments = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'grade':
          return this.compare(a.bloodBank.averageGrade, b.bloodBank.averageGrade, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
