import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ConsultapComponent } from './consultap/consultap.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'consultap', component: ConsultapComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
