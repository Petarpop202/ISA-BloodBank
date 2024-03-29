import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { DonorRootComponent } from './donor-root/donor-root.component';
import { BloodDonorMenuComponent } from './blood-donor-menu/blood-donor-menu.component';
import { BloodDonorProfileComponent } from './blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './edit-blood-donor-profile/edit-blood-donor-profile.component';
import { DonorSurveyComponent } from './donor-survey/donor-survey.component';
import { RouterModule } from '@angular/router';
import { AppointmentDialogComponent } from './donor-root/appointment-dialog/appointment-dialog.component';
import { ScheduledAppointmentsComponent } from './scheduled-appointments/scheduled-appointments.component';
import { BloodDonorHomepageComponent } from './blood-donor-homepage/blood-donor-homepage.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ScheduledAppointmentHistoryComponent } from './scheduled-appointment-history/scheduled-appointment-history.component';



@NgModule({
    declarations: [
        DonorRootComponent,
        BloodDonorMenuComponent,
        BloodDonorProfileComponent,
        EditBloodDonorProfileComponent,
        DonorSurveyComponent,
        AppointmentDialogComponent,
        ScheduledAppointmentsComponent,
        ScheduledAppointmentHistoryComponent,
        BloodDonorHomepageComponent,
        ScheduleAppointmentComponent
    ],
    exports: [
        BloodDonorMenuComponent,
    ],
    imports: [
        CommonModule,
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
        RouterModule
        
    ]
})
  export class BloodDonorModule { }