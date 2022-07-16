import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FilterAllComponent } from './components/filter-all/filter-all.component';


@NgModule({
  declarations: [
    MainComponent,
    FilterAllComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
