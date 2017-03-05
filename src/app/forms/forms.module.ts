import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    FormsRoutingModule
  ],
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsModule { }
