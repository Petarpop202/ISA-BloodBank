import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodCenterComponent } from './blood-center/blood-center.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageModule } from '../homepage/homepage.module';



@NgModule({
  declarations: [
    BloodCenterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageModule
  ]
})
export class BloodBankCenterModule { }
