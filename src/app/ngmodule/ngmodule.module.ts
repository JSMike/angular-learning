import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NgmoduleRoutingModule } from './ngmodule-routing.module';
import { NgmoduleComponent } from './ngmodule.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgmoduleRoutingModule
  ],
  declarations: [
    NgmoduleComponent
  ],
  exports: [
    NgmoduleComponent
  ]
})
export class NgmoduleModule { }
