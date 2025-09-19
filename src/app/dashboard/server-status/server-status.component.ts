import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  // typo type or enum type
  currentStatus:'online'|'offline'|'unknown' = 'online';

  constructor () {
    setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus = 'online';
        console.log('Online');
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
        console.log('Offline');
      } else {
        this.currentStatus = 'unknown';
        console.log('Unknown');
      }
    }, 2000);
  }
}
