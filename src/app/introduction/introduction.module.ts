import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    IntroductionRoutingModule
  ],
  declarations: [
    IntroductionComponent
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
