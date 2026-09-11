import { Routes } from '@angular/router';
import { List } from './domains/products/pages/list/list';
import { About } from './domains/info/pages/about/about';
import { NotFound } from './domains/info/pages/not-found/not-found';
import { Layout } from './domains/shared/components/layout/layout';
import { ProductDetail } from './domains/products/pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    // children nos ayudara a identificar los componentes que utilizaran el layout principla (incluye header y margenes)
    children: [
      {
        path: '',
        component: List,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'product/:id',
        component: ProductDetail,
      },
    ],
  },
  // Siempre al final el error
  {
    path: '**',
    component: NotFound,
  },
];
