import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductAddComponent} from './products/product-add/product-add.component';

const routes: Routes = [
  {path: '', component: ProductAddComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
