import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

const Material = [
  CommonModule,
  MatTabsModule
]


@NgModule({
  declarations: [],
  imports: [ Material],
  exports: [Material] 
})
export class MaterialModule { }
