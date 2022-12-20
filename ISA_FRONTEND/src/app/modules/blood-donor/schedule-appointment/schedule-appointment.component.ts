import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BloodBank } from 'src/app/model/bloodBank';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBankService } from 'src/app/services/blood-bank.service';
import { BloodDonationAppointment } from 'src/app/model/bloodDonationAppointment';
import { Sort } from '@angular/material/sort';

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
  hours: number = 0
  minutes: number = 0
  appointmentDate: Date = new Date()
  error?: String
  dateError?: String
  timeError?: String
  
  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  getAppointments() {
    this.bloodBankService.getAppointmentsByDateTime(this.appointmentDate.toISOString()).subscribe(res => {
      this.appointments = res
      this.appointments.forEach(app => {
        app.startDateTime = new Date(Number(app.startDateTime[0]), Number(app.startDateTime[1]) - 1, Number(app.startDateTime[2]), Number(app.startDateTime[3]), Number(app.startDateTime[4]), 0).toISOString()
      })
    })
  }

  searchAppointments(): void {
    let selectedDate = new Date(this.selectedDate)
    this.appointmentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), this.hours + 1, this.minutes, 0)
    this.getAppointments()
  }

  scheduleAppointment(id: string): void {
    this.bloodBankService.getAppointment(id).subscribe(res =>{
      this.appointment = res
      console.log(this.appointment)
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
