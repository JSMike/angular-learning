import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldingComponent } from './scaffolding.component';

const routes: Routes = [
  {
    path: '',
    component: ScaffoldingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ScaffoldingRoutingModule { }
