import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CprodComponent } from './cprod/cprod.component';
import { CcartComponent } from './ccart/ccart.component';

@NgModule({
  declarations: [
    AppComponent,
    CprodComponent,
    CcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
