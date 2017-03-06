import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsRoutingModule
  ],
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsModule { }
