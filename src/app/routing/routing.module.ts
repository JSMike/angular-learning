import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
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
