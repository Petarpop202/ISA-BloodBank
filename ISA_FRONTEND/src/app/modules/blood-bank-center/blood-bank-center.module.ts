import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomepageModule } from '../homepage/homepage.module';
import { FormsModule } from '@angular/forms';
import { AddBloodDonationAppointmentComponent } from './add-blood-donation-appointment/add-blood-donation-appointment.component';


@NgModule({
  declarations: [
    AddBloodDonationAppointmentComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageModule,
    FormsModule
  ]
})
export class BloodBankCenterModule { }
