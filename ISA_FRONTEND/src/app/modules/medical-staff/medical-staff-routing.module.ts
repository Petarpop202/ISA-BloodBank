import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodCenterComponent } from "./blood-center/blood-center.component";
import { EditBloodBankComponent } from "./edit-blood-bank/edit-blood-bank.component";
import { EditMedicineStaffProfileComponent } from "./edit-medicine-staff-profile/edit-medicine-staff-profile.component";
import { MedicineStaffProfileComponent } from "./medicine-staff-profile/medicine-staff-profile.component";
import { AddBloodDonationAppointmentComponent } from "./add-blood-donation-appointment/add-blood-donation-appointment.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { CalendarComponent } from "./calendar/calendar.component"; 
import { EditPasswordComponent } from "./edit-medicine-staff-profile/edit-password/edit-password.component";


const routes: Routes = [
  { path: 'medicineStaffProfile/:id', component: MedicineStaffProfileComponent},
  { path: 'medicineStaffProfile/:id/editMedicineStaffProfile/:id', component: EditMedicineStaffProfileComponent},
  { path: 'medicineStaffProfile/:id/editPasswordMedicineStaffProfile/:id', component: EditPasswordComponent},
  { path: 'myBloodBank/:id', component: BloodCenterComponent},
  { path: 'myBloodBank/:id/editBloodBank/:id', component: EditBloodBankComponent},  
  { path: 'scheduler', component: SchedulerComponent},
  
  { path: 'myBloodBank/:id/addBloodDonationAppointment/:id', component: AddBloodDonationAppointmentComponent},
  { path: 'myBloodBank/:id/calendar', component: CalendarComponent},
  { path: '', redirectTo: 'scheduler', pathMatch:'full'},
  { path: '**', redirectTo: 'scheduler', pathMatch:'full'},
];
  
  
  @NgModule({
      imports: [
          RouterModule.forChild(routes)
        ],  
        exports: [RouterModule]
  })
  export class MedicalStaffRoutingModule { }