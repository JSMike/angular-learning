import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { DecoratorsRoutingModule } from './decorators-routing.module';
import { DecoratorsComponent } from './decorators.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
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
