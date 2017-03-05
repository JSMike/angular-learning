import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
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
