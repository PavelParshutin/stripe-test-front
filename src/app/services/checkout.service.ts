import { Injectable } from '@angular/core';
import { StripeService } from "ngx-stripe";
import { switchMap } from "rxjs";
import { CheckoutApiService } from "src/app/services/checkout-api.service";
import { ITicket } from "src/app/interfaces/ticket.interface";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private checkoutApiService: CheckoutApiService,
              private stripeService: StripeService) {}

  public checkout(ticket: ITicket): void {
    this.checkoutApiService.checkout(ticket)
      .pipe(
        switchMap(session => {
          console.log(session);

          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
