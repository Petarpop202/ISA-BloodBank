import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { BloodBankCenterModule } from './modules/blood-bank-center/blood-bank-center.module';
import { UserProfilesModule } from './modules/user-profiles/user-profiles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/homepage/register/register.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    
    HomepageModule,
    BloodBankCenterModule,
    UserProfilesModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  
  providers: [  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
