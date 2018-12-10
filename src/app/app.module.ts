import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
//import { ModelsComponent } from './shared/models/models.component';
//import { ServicesComponent } from './shared/services/services.component';
import { GuardComponent } from './shared/guard/guard.component';
//import { WelcomeComponent } from './app/welcome/welcome.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GuardComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    ProductListComponent,
    //ModelsComponent,
    //WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
