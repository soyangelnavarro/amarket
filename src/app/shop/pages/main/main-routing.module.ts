import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterAllComponent } from './components/filter-all/filter-all.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'all',
    component: FilterAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
