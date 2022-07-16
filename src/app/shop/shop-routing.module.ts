import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import( './pages/main/main.module' ).then( (m) => m.MainModule )
      },
      {
        path: 'category',
        loadChildren: () => import( './pages/category/category.module' ).then( (m) => m.CategoryModule )
      },
      {
        path: 'product',
        loadChildren: () => import( './pages/product/product.module' ).then( (m) => m.ProductModule )
      },
      {
        path: 'search',
        loadChildren: () => import( './pages/search/search.module' ).then( (m) => m.SearchModule )
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
