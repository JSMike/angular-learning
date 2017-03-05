import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgmoduleComponent } from './ngmodule.component';

const routes: Routes = [
  {
    path: '',
    component: NgmoduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgmoduleRoutingModule { }
