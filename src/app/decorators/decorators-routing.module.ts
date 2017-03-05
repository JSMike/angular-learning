import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratorsComponent } from './decorators.component';

const routes: Routes = [
  {
    path: '',
    component: DecoratorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DecoratorsRoutingModule { }
