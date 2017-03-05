import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { EditorsRoutingModule } from './editors-routing.module';
import { EditorsComponent } from './editors.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    EditorsRoutingModule
  ],
  declarations: [
    EditorsComponent
  ],
  exports: [
    EditorsComponent
  ]
})
export class EditorsModule { }
