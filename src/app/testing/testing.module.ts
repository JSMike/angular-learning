import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TestingRoutingModule
  ],
  declarations: [
    TestingComponent
  ],
  exports: [
    TestingComponent
  ]
})
export class TestingModule { }
