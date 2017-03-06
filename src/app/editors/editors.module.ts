import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { EditorsRoutingModule } from './editors-routing.module';
import { EditorsComponent } from './editors.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EditorsRoutingModule
  ],
  declarations: [
    EditorsComponent
  ],
  exports: [
    EditorsComponent
  ]
})
export class EditorsModule { }
