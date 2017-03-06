import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsRoutingModule
  ],
  declarations: [
    ComponentsComponent
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
