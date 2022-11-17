import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MedicineStaffProfileComponent } from './medicine-staff-profile/medicine-staff-profile.component';
import { HomepageModule } from '../homepage/homepage.module';
import { EditMedicineStaffProfileComponent } from './edit-medicine-staff-profile/edit-medicine-staff-profile.component';
import { BloodDonorProfileComponent } from './blood-donor-profile/blood-donor-profile.component';
import { EditBloodDonorProfileComponent } from './edit-blood-donor-profile/edit-blood-donor-profile.component';




@NgModule({
  declarations: [
    MedicineStaffProfileComponent,
    EditMedicineStaffProfileComponent,
    BloodDonorProfileComponent,
    EditBloodDonorProfileComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageModule,
    FormsModule
  ],
  
})
export class UserProfilesModule { }
