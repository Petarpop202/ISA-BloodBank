import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodCenterComponent } from './modules/blood-bank-center/blood-center/blood-center.component';
import { EditBloodBankComponent } from './modules/blood-bank-center/edit-blood-bank/edit-blood-bank.component';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { LoginComponent } from './modules/homepage/login/login.component';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { RegisterComponent } from './modules/homepage/register/register.component';
import { BloodDonorProfileComponent } from './modules/blood-donor/blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './modules/blood-donor/edit-blood-donor-profile/edit-blood-donor-profile.component';
import { EditMedicineStaffProfileComponent } from './modules/user-profiles/edit-medicine-staff-profile/edit-medicine-staff-profile.component';
import { MedicineStaffProfileComponent } from './modules/user-profiles/medicine-staff-profile/medicine-staff-profile.component';
import { DonorSurveyComponent } from './modules/blood-donor/donor-survey/donor-survey.component';
import { SystemAdministratorComponent } from './modules/administrator/system-administrator/system-administrator.component';
import { NewBloodBankComponent } from './modules/blood-bank-center/new-blood-bank/new-blood-bank.component';
import { DonorRootComponent } from './modules/blood-donor/donor-root/donor-root.component';
import { AdministratorRootComponent } from './modules/administrator/administrator-root/administrator-root.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'myBloodBank/:id', component: BloodCenterComponent},
  { path: 'editBloodBank/:id', component: EditBloodBankComponent},
  { path: 'newBloodBank', component: NewBloodBankComponent},


  { path: 'medicineStaffProfile/:id', component: MedicineStaffProfileComponent},
  { path: 'editMedicineStaffProfile/:id', component: EditMedicineStaffProfileComponent},


  {
    path: 'donor',
    component: DonorRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'ROLE_DONOR' },
    loadChildren: () =>
      import('./modules/blood-donor/donor-routing-module.module').then(
        (m) => m.DonorRoutingModuleModule
      ),
  },
  {
    path: 'admin',
    component: AdministratorRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'ROLE_ADMIN' },
    loadChildren: () =>
      import('./modules/administrator/administrator.module').then(
        (m) => m.AdministratorModule
      ),
  },

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
