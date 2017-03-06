import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }
