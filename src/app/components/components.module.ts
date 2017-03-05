import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    ComponentsRoutingModule
  ],
  declarations: [
    ComponentsComponent
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
