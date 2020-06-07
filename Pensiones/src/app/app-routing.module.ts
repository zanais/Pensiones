import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ConsultapComponent } from './consultap/consultap.component';
import { Consultap2Component } from './consultap2/consultap2.component';
import { ConsultatComponent } from './consultat/consultat.component';
import { Tramitar1Component} from './tramitar1/tramitar1.component';
import { Tramitar2Component} from './tramitar2/tramitar2.component';
import { Tramitar3Component} from './tramitar3/tramitar3.component';
import { Tramitar4Component } from './tramitar4/tramitar4.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'consultap', component: ConsultapComponent},
  { path: 'consultap2', component: Consultap2Component},
  { path: 'consultat', component: ConsultatComponent},
  { path: 'tramitar1', component:Tramitar1Component},
  { path: 'tramitar2', component: Tramitar2Component},
  { path: 'tramitar3', component:Tramitar3Component},
  { path: 'tramitar4', component:Tramitar4Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
