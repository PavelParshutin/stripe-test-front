import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute) {
    ticketService.addToHistory(activatedRoute.snapshot.params['id']).subscribe();
  }

}
