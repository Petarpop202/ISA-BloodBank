import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
