import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { LoginComponent } from './modules/homepage/login/login.component';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { RegisterComponent } from './modules/homepage/register/register.component';
import { DonorRootComponent } from './modules/blood-donor/donor-root/donor-root.component';
import { AdministratorRootComponent } from './modules/administrator/administrator-root/administrator-root.component';
import { MedicalRootComponent } from './modules/medical-staff/medical-root/medical-root.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

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
    path: 'medicalworker',
    component: MedicalRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'ROLE_MEDICALWORKER' },
    loadChildren: () =>
      import('./modules/medical-staff/medical-staff-routing.module').then(
        (m) => m.MedicalStaffRoutingModule
      ),
  },
  {
    path: 'admin',
    component: AdministratorRootComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'ROLE_ADMIN' },
    loadChildren: () =>
      import('./modules/administrator/administrator-routing.module').then(
        (m) => m.AdministratorRoutingModule
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
