import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ConsultapComponent } from './consultap/consultap.component';
import { Consultap2Component} from './consultap2/consultap2.component';
import { ConsultatComponent } from './consultat/consultat.component';
import { Tramitar1Component} from './tramitar1/tramitar1.component';
import { Tramitar2Component} from './tramitar2/tramitar2.component';
import { Tramitar3Component} from './tramitar3/tramitar3.component';
import { Tramitar4Component } from './tramitar4/tramitar4.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConsultapComponent, 
    Consultap2Component,
    ConsultatComponent,
    Tramitar1Component,
    Tramitar2Component,
    Tramitar3Component,
    Tramitar4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
