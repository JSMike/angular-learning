import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesRoutingModule
  ],
  declarations: [
    PipesComponent
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }
