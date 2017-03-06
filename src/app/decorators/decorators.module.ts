import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { DecoratorsComponent } from './decorators.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DecoratorsRoutingModule
  ],
  declarations: [
    DecoratorsComponent
  ],
  exports: [
    DecoratorsComponent
  ]
})
export class DecoratorsModule { }
