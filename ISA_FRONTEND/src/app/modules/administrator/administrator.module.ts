import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdministratorComponent } from './system-administrator/system-administrator.component';
import { SearchUsersComponent } from './search-users/search-users.component';
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
import { AdministratorRootComponent } from './administrator-root/administrator-root.component';
import { SharedModule } from '../shared/shared.module';
import { NewBloodBankComponent } from '../medical-staff/new-blood-bank/new-blood-bank.component';
import { BloodBankInfoDialogComponent } from './blood-bank-info-dialog/blood-bank-info-dialog.component';
import { NewAdminDialogComponent } from './new-admin-dialog/new-admin-dialog.component';
import { NewSystemAdminDialogComponent } from './new-system-admin-dialog/new-system-admin-dialog.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { ZalbeComponent } from './zalbe/zalbe.component';
import { AdministratorMenuComponent } from './administrator-menu/administrator-menu.component';




@NgModule({
  declarations: [
    SearchUsersComponent,
    SystemAdministratorComponent,
    AdministratorRootComponent,
    NewBloodBankComponent,
    BloodBankInfoDialogComponent,
    NewAdminDialogComponent,
    NewSystemAdminDialogComponent,
    ChangePasswordDialogComponent,
    ZalbeComponent,
    AdministratorMenuComponent],
    
    
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
    SharedModule
  ]
})
export class AdministratorModule { }
