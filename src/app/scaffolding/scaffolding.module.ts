import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { ScaffoldingRoutingModule } from './scaffolding-routing.module';
import { ScaffoldingComponent } from './scaffolding.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
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
