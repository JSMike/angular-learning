import { Component } from '@angular/core';

@Component({
  selector: 'ngl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenav: {
    section: string;
    pages: {
      title: string;
      url: string;
    }[];
  }[];


  constructor() {
    this.sidenav = [
      {
        section: 'Getting Started',
        pages: [
          {
            title: 'Home',
            url: ''
          },
          {
            title: 'Introduction to Angular',
            url: 'introduction'
          }
        ]
      },
      {
        section: 'Development Environment',
        pages: [
          {
            title: 'Editors',
            url: 'editors'
          },
          {
            title: 'Angular CLI and Seeds',
            url: 'scaffolding'
          }
        ]
      },
      {
        section: 'Angular Building Blocks',
        pages: [
          {
            title: 'NgModule',
            url: 'ngmodule'
          },
          {
            title: 'Decorators',
            url: 'decorators'
          },
          {
            title: 'Components',
            url: 'components'
          },
          {
            title: 'Directives',
            url: 'directives'
          },
          {
            title: 'Pipes',
            url: 'pipes'
          },
          {
            title: 'Services',
            url: 'services'
          },
          {
            title: 'Routing',
            url: 'routing'
          },
          {
            title: 'Forms',
            url: 'forms'
          }
        ]
      },
      {
        section: 'Testing',
        pages: [
          {
            title: 'Testing',
            url: 'testing'
          },
        ]
      },
      {
        section: 'Advanced Topics',
        pages: [
          {
            title: 'Advanced Topics',
            url: 'advanced'
          }
        ]
      },
      {
        section: 'Links',
        pages: [
          {
            title: 'Additional Resources',
            url: 'links'
          }
        ]
      }

    ];
  }
}
