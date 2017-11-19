import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DocPipe } from './doc.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [AdminComponent, DocPipe],
  providers: [AdminService]
})
export class AdminModule { }
