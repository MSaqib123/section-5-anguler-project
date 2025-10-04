import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  // onAddTicket(ticket: Ticket) {
  onAddTicket(ticketData:{ title: string; text: string}) {
    const ticket:Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    };
    this.tickets.push(ticket);
    console.log(this.tickets);
  }
}
