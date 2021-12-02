import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HttpClientModule } from "@angular/common/http";
import { TicketsStoreComponent } from './components/tickets-store/tickets-store.component';
import { NgxStripeModule } from "ngx-stripe";
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketsStoreComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51K1qCSLWO07pmKyeJnNmt4BbmUid1IO3qwP0KkLILE8Ioerlf00lK8tDlkIFDic1Y5eFKSupQZot2UdbpUW7Pl7z00KnHW2U8N'),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
