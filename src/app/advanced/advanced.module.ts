import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdvancedRoutingModule
  ],
  declarations: [
    AdvancedComponent
  ],
  exports: [
    AdvancedComponent
  ]
})
export class AdvancedModule { }
