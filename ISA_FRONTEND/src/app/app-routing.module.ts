import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodCenterComponent } from './modules/blood-bank-center/blood-center/blood-center.component';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { LoginComponent } from './modules/homepage/login/login.component';
import { RegisterComponent } from './modules/homepage/register/register.component';
import { BloodDonorProfileComponent } from './modules/user-profiles/blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './modules/user-profiles/edit-blood-donor-profile/edit-blood-donor-profile.component';
import { EditMedicineStaffProfileComponent } from './modules/user-profiles/edit-medicine-staff-profile/edit-medicine-staff-profile.component';
import { MedicineStaffProfileComponent } from './modules/user-profiles/medicine-staff-profile/medicine-staff-profile.component';
import { DonorSurveyComponent } from './modules/homepage/donor-survey/donor-survey.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'myBloodBankCenter', component: BloodCenterComponent},

  { path: 'bloodDonorProfile', component: BloodDonorProfileComponent},
  { path: 'editBloodDonorProfile', component: EditBloodDonorProfileComponent},

  { path: 'medicineStaffProfile', component: MedicineStaffProfileComponent},
  { path: 'editMedicineStaffProfile', component: EditMedicineStaffProfileComponent},
  { path: 'donorSurvey', component: DonorSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent,
  LoginComponent,
  RegisterComponent,
]
