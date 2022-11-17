import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCenterComponent } from './blood-center/blood-center.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageModule } from '../homepage/homepage.module';
import { EditBloodBankComponent } from './edit-blood-bank/edit-blood-bank.component';
import { FormsModule } from '@angular/forms';
import { NewBloodBankComponent } from './new-blood-bank/new-blood-bank.component';




@NgModule({
  declarations: [
    BloodCenterComponent,
    EditBloodBankComponent,
    NewBloodBankComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageModule,
    FormsModule
  ]
})
export class BloodBankCenterModule { }
