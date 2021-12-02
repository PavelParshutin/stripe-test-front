import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsStoreComponent } from "src/app/components/tickets-store/tickets-store.component";
import { SuccessPageComponent } from "src/app/components/success-page/success-page.component";

const routes: Routes = [
  {
    path: '',
    component: TicketsStoreComponent,
  },
  {
    path: 'success/:id',
    component: SuccessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
