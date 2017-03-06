import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DirectivesRoutingModule
  ],
  declarations: [
    DirectivesComponent
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
