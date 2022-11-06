import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomepageMenuComponent } from './homepage-menu/homepage-menu.component';
import { MedicineStaffMenuComponent } from './medicine-staff-menu/medicine-staff-menu.component';



@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    HomepageMenuComponent,
    MedicineStaffMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomepageMenuComponent,
    MedicineStaffMenuComponent,
  ]
})
export class HomepageModule { }
