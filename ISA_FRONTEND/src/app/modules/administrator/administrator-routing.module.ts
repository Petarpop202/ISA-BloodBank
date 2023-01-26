import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchUsersComponent } from "./search-users/search-users.component";
import { SystemAdministratorComponent } from "./system-administrator/system-administrator.component";
import { NewBloodBankComponent } from "../medical-staff/new-blood-bank/new-blood-bank.component";
import { ZalbeComponent } from "./zalbe/zalbe.component";

const routes: Routes = [
    { path: 'systemAdministrator', component: SystemAdministratorComponent},
    { path: 'systemAdministrator/searchUsers', component: SearchUsersComponent},
    { path: 'systemAdministrator/newBloodBank', component: NewBloodBankComponent},
    { path: 'systemAdministrator/zalbe', component: ZalbeComponent},
    { path: '', redirectTo: 'systemAdministrator', pathMatch:'full'},
    { path: '**', redirectTo: 'systemAdministrator', pathMatch:'full'},
    ];
  
  @NgModule({
      imports: [
          RouterModule.forChild(routes)
        ],  
        exports: [RouterModule]
  })
  export class AdministratorRoutingModule { }