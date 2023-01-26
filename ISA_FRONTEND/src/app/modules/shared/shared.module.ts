import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const importAndExport = [
  AppRoutingModule,
  RouterModule,
  MaterialModule,
  BrowserAnimationsModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    importAndExport
  ],
  exports: [
    importAndExport,
    FooterComponent,
  ]
})
export class SharedModule { }
