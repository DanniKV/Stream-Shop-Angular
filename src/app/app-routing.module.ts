import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  //For routing paths {path: '', component: }

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
