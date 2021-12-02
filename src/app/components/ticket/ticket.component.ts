import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITicket } from "src/app/interfaces/ticket.interface";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent {

  @Input() public ticket!: ITicket;
  @Output() public buyTicket = new EventEmitter<ITicket>();

  public buy(): void {
    this.buyTicket.emit(this.ticket);
  }
}
