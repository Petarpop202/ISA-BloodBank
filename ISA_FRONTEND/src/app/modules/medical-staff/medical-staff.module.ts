import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineStaffMenuComponent } from './medicine-staff-menu/medicine-staff-menu.component';
import { EditMedicineStaffProfileComponent } from './edit-medicine-staff-profile/edit-medicine-staff-profile.component';
import { MedicineStaffProfileComponent } from './medicine-staff-profile/medicine-staff-profile.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BloodCenterComponent } from './blood-center/blood-center.component';
import { EditBloodBankComponent } from './edit-blood-bank/edit-blood-bank.component';
import { MedicalRootComponent } from './medical-root/medical-root.component';
import { RouterModule } from '@angular/router';
import { AddBloodDonationAppointmentComponent } from './add-blood-donation-appointment/add-blood-donation-appointment.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from "@angular/platform-browser";
import { FullCalendarModule } from "@fullcalendar/angular";



@NgModule({
  declarations: [ 
    MedicineStaffMenuComponent,
    EditMedicineStaffProfileComponent,
    MedicineStaffProfileComponent,
    BloodCenterComponent,
    EditBloodBankComponent,    
    MedicalRootComponent,
    AddBloodDonationAppointmentComponent,
    SchedulerComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    
    
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    
    MatIconModule,
    ReactiveFormsModule,
    
   
    MatRadioModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    RouterModule,

    BrowserModule,
    FullCalendarModule

  ],
  exports:[MedicineStaffMenuComponent]
})
export class MedicalStaffModule { }
