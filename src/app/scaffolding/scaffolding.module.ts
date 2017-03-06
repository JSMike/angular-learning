import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ScaffoldingRoutingModule } from './scaffolding-routing.module';
import { ScaffoldingComponent } from './scaffolding.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ScaffoldingRoutingModule
  ],
  declarations: [
    ScaffoldingComponent
  ],
  exports: [
    ScaffoldingComponent
  ]
})
export class ScaffoldingModule { }
