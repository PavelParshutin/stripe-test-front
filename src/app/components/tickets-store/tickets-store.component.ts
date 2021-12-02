import { Component } from '@angular/core';
import { TicketService } from "src/app/services/ticket.service";
import { ITicket } from "src/app/interfaces/ticket.interface";
import { CheckoutService } from "src/app/services/checkout.service";

@Component({
  selector: 'app-tickets-store',
  templateUrl: './tickets-store.component.html',
  styleUrls: ['./tickets-store.component.css']
})
export class TicketsStoreComponent {

  public tickets$ = this.ticketsService.getTickets();
  public history$ = this.ticketsService.getHistory();

  constructor(private ticketsService: TicketService, private checkoutService: CheckoutService) { }

  public buyTicket(ticket: ITicket): void {
    this.checkoutService.checkout(ticket);
  }
}
