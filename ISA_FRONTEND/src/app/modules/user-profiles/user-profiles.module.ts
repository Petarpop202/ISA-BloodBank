import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MedicineStaffProfileComponent } from './medicine-staff-profile/medicine-staff-profile.component';
import { HomepageModule } from '../homepage/homepage.module';
import { EditMedicineStaffProfileComponent } from './edit-medicine-staff-profile/edit-medicine-staff-profile.component';



@NgModule({
  declarations: [
    MedicineStaffProfileComponent,
    EditMedicineStaffProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageModule
  ]
})
export class UserProfilesModule { }
