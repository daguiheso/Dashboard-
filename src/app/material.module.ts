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
  MatRadioModule,
  MatSelectModule
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
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
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
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  declarations: []
})

export class MaterialModule { }
