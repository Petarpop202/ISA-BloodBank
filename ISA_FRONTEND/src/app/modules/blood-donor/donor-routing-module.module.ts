import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorRootComponent } from './donor-root/donor-root.component';
import { HomepageModule } from "../homepage/homepage.module";
import { RouterModule, Routes } from '@angular/router';
import { BloodDonorProfileComponent } from './blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './edit-blood-donor-profile/edit-blood-donor-profile.component';
import { DonorSurveyComponent } from './donor-survey/donor-survey.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

const routes: Routes = [
  { path: 'bloodDonorProfile', component: BloodDonorProfileComponent},
  { path: 'scheduleAppointment', component: ScheduleAppointmentComponent},
  { path: 'editBloodDonorProfile', component: EditBloodDonorProfileComponent},
  { path: 'donorSurvey', component: DonorSurveyComponent},
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],  
      exports: [RouterModule]
})
export class DonorRoutingModuleModule { }

export const routingComponents = [
  DonorRootComponent,
]
