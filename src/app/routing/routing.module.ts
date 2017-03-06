import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingRoutingModule
  ],
  declarations: [
    RoutingComponent
  ],
  exports: [
    RoutingComponent
  ]
})
export class RoutingModule { }
