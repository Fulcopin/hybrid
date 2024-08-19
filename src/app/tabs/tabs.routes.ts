import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';  // Rutas relativas correctas
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page').then(m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () => import('../tab2/tab2.page').then(m => m.Tab2Page)
      },
      {
        path: 'tab3',
        component: Tab3Page,
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      }
    ]
  }
];
