import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules
} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'introduction',
    loadChildren: './introduction/introduction.module#IntroductionModule'
  },
  {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule'
  },
  {
    path: 'scaffolding',
    loadChildren: './scaffolding/scaffolding.module#ScaffoldingModule'
  },
  {
    path: 'ngmodule',
    loadChildren: './ngmodule/ngmodule.module#NgmoduleModule'
  },
  {
    path: 'decorators',
    loadChildren: './decorators/decorators.module#DecoratorsModule'
  },
  {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  },
  {
    path: 'directives',
    loadChildren: './directives/directives.module#DirectivesModule'
  },
  {
    path: 'pipes',
    loadChildren: './pipes/pipes.module#PipesModule'
  },
  {
    path: 'services',
    loadChildren: './services/services.module#ServicesModule'
  },
  {
    path: 'routing',
    loadChildren: './routing/routing.module#RoutingModule'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule'
  },
  {
    path: 'testing',
    loadChildren: './testing/testing.module#TestingModule'
  },
  {
    path: 'advanced',
    loadChildren: './advanced/advanced.module#AdvancedModule'
  },
  {
    path: 'links',
    loadChildren: './links/links.module#LinksModule'
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
