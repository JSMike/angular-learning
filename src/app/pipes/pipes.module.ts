import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    PipesRoutingModule
  ],
  declarations: [
    PipesComponent
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }
