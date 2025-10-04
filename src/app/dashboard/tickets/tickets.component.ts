import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
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



  //======= 1 way of updating existing array item =======
  onCloseTicket(id: string) { 
    //this.tickets = this.tickets.map(t => t.id === id ? { ...t, status: 'closed' } : t);
    this.tickets = this.tickets.map(t => {
       if(t.id === id){
        return { ...t, status: 'closed' }
       }
       return t;
    });
  }

}
