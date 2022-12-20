import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchUsersComponent } from "./search-users/search-users.component";
import { SystemAdministratorComponent } from "./system-administrator/system-administrator.component";

const routes: Routes = [
    { path: 'systemAdministrator', component: SystemAdministratorComponent},
    { path: 'searchUsers', component: SearchUsersComponent},
    ];
  
  @NgModule({
      imports: [
          RouterModule.forChild(routes)
        ],  
        exports: [RouterModule]
  })
  export class AdministratorRoutingModule { }