import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodCenterComponent } from "./blood-center/blood-center.component";
import { EditBloodBankComponent } from "./edit-blood-bank/edit-blood-bank.component";
import { EditMedicineStaffProfileComponent } from "./edit-medicine-staff-profile/edit-medicine-staff-profile.component";
import { MedicineStaffProfileComponent } from "./medicine-staff-profile/medicine-staff-profile.component";
import { AddBloodDonationAppointmentComponent } from "./add-blood-donation-appointment/add-blood-donation-appointment.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { CalendarComponent } from "./calendar/calendar.component"; 


const routes: Routes = [
  { path: 'medicineStaffProfile/:id', component: MedicineStaffProfileComponent},
  { path: 'editMedicineStaffProfile/:id', component: EditMedicineStaffProfileComponent},
  { path: 'myBloodBank/:id', component: BloodCenterComponent},
  { path: 'editBloodBank/:id', component: EditBloodBankComponent},  
  { path: 'scheduler', component: SchedulerComponent},

  { path: 'myBloodBank/:id/addBloodDonationAppointment/:id', component: AddBloodDonationAppointmentComponent},
  { path: 'myBloodBank/:id/calendar/:id', component: CalendarComponent},
];
  
  
  @NgModule({
      imports: [
          RouterModule.forChild(routes)
        ],  
        exports: [RouterModule]
  })
  export class MedicalStaffRoutingModule { }