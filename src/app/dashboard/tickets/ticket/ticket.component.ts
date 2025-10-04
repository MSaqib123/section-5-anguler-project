import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close=output();
  detailsVisible = signal(false);

  //============ Some notes for  class=50 ==============
  // input , output has some configurations
  // data = input.required<Ticket>({alias:'ticketData'});
  // close = output<{id:string}>({alias:'onClose'});

  
  toggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update(wasVisible => !wasVisible);
  }



  onMarkAsComplete() {
    this.close.emit();
  } 
}
