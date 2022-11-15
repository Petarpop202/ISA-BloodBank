import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodCenterComponent } from './modules/blood-bank-center/blood-center/blood-center.component';
import { EditBloodBankComponent } from './modules/blood-bank-center/edit-blood-bank/edit-blood-bank.component';
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

  { path: 'myBloodBank/:id', component: BloodCenterComponent},
  { path: 'editBloodBank/:id', component: EditBloodBankComponent},

  { path: 'bloodDonorProfile', component: BloodDonorProfileComponent},
  { path: 'editBloodDonorProfile', component: EditBloodDonorProfileComponent},

  { path: 'donorSurvey', component: DonorSurveyComponent}
  { path: 'medicineStaffProfile/:id', component: MedicineStaffProfileComponent},
  { path: 'editMedicineStaffProfile/:id', component: EditMedicineStaffProfileComponent},

  // ova linija mora biti zadnja, biti zadnja
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
