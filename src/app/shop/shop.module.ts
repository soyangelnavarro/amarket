import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [ShopComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  providers: [],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
