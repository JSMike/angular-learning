import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LinksRoutingModule
  ],
  declarations: [
    LinksComponent
  ],
  exports: [
    LinksComponent
  ]
})
export class LinksModule { }
