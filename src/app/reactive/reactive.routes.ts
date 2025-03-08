import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicPageComponent,
      },
      {
        path: 'dynamic',
        component: DynamicPageComponent,
      },
      {
        path: 'switches',
        component: SwitchesPagesComponent,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
