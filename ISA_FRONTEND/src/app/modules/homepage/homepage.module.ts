import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomepageMenuComponent } from './homepage-menu/homepage-menu.component';
import { MedicineStaffMenuComponent } from './medicine-staff-menu/medicine-staff-menu.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './register/validation-error/validation-error.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BloodDonorMenuComponent } from './blood-donor-menu/blood-donor-menu.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { DonorSurveyComponent } from './donor-survey/donor-survey.component';


@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    HomepageMenuComponent,
    BloodDonorMenuComponent,
    MedicineStaffMenuComponent,
    ValidationErrorComponent,
    DonorSurveyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    
    
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    
    MatIconModule,
    
   
    MatRadioModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    HomepageMenuComponent,
    BloodDonorMenuComponent,
    MedicineStaffMenuComponent
  ]
})
export class HomepageModule { }
