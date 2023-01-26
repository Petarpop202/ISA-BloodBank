import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodCenterComponent } from "./blood-center/blood-center.component";
import { EditBloodBankComponent } from "./edit-blood-bank/edit-blood-bank.component";
import { EditMedicineStaffProfileComponent } from "./edit-medicine-staff-profile/edit-medicine-staff-profile.component";
import { MedicineStaffProfileComponent } from "./medicine-staff-profile/medicine-staff-profile.component";
import { AddBloodDonationAppointmentComponent } from "./add-blood-donation-appointment/add-blood-donation-appointment.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { CalendarComponent } from "./calendar/calendar.component"; 
import { NavigationComponent } from "./navigation/navigation.component";

const routes: Routes = [
  { path: 'medicineStaffProfile/:id', component: MedicineStaffProfileComponent},
  { path: 'medicineStaffProfile/:id/editMedicineStaffProfile/:id', component: EditMedicineStaffProfileComponent},
  { path: 'myBloodBank/:id', component: BloodCenterComponent},
  { path: 'myBloodBank/:id/editBloodBank/:id', component: EditBloodBankComponent},  
  { path: 'scheduler', component: SchedulerComponent},
  { path: 'navigating', component: NavigationComponent},
  { path: 'myBloodBank/:id/addBloodDonationAppointment/:id', component: AddBloodDonationAppointmentComponent},
  { path: 'myBloodBank/:id/calendar', component: CalendarComponent},
];
  
  
  @NgModule({
      imports: [
          RouterModule.forChild(routes)
        ],  
        exports: [RouterModule]
  })
  export class MedicalStaffRoutingModule { }