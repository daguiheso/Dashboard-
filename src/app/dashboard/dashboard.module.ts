import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
