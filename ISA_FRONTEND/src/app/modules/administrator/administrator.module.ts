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


@NgModule({
  declarations: [
    SearchUsersComponent,
    SystemAdministratorComponent,
    AdministratorRootComponent],
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
  ]
})
export class AdministratorModule { }
