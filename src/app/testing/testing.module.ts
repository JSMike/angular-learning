import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Ng2HandySyntaxHighlighterModule,
    TestingRoutingModule
  ],
  declarations: [
    TestingComponent
  ],
  exports: [
    TestingComponent
  ]
})
export class TestingModule { }
