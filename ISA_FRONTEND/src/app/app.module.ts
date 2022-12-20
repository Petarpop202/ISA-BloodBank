import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { HomepageModule } from './modules/homepage/homepage.module';
import { BloodBankCenterModule } from './modules/blood-bank-center/blood-bank-center.module';
import { UserProfilesModule } from './modules/user-profiles/user-profiles.module';
import { BloodDonorModule } from './modules/blood-donor/blood-donor.module';
import { AuthInterceptor } from './model/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdministratorModule } from './modules/administrator/administrator.module';




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
    BloodDonorModule,
    AdministratorModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
    providers: [
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
