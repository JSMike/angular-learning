import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { NgmoduleRoutingModule } from './ngmodule-routing.module';
import { NgmoduleComponent } from './ngmodule.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    NgmoduleRoutingModule
  ],
  declarations: [
    NgmoduleComponent
  ],
  exports: [
    NgmoduleComponent
  ]
})
export class NgmoduleModule { }
