import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorRootComponent } from './donor-root/donor-root.component';
import { HomepageModule } from "../homepage/homepage.module";
import { RouterModule, Routes } from '@angular/router';
import { BloodDonorProfileComponent } from './blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './edit-blood-donor-profile/edit-blood-donor-profile.component';
import { DonorSurveyComponent } from './donor-survey/donor-survey.component';

const routes: Routes = [
  { path: 'bloodDonorProfile', component: BloodDonorProfileComponent},
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
