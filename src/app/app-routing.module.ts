import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessdetailsComponent } from './businessdetails/businessdetails.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'businessdetail'
  },

  {
    path: "businessdetail",
    component: BusinessdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
