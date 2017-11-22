import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  declarations: []
})

export class MaterialModule { }
