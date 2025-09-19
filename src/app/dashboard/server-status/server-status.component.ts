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
    // setInterval(() => {
    //   const rnd = Math.random();

    //   if(rnd < 0.5) {
    //     this.currentStatus = 'online';
    //     console.log('Online');
    //   } else if (rnd < 0.9) {
    //     this.currentStatus = 'offline';
    //     console.log('Offline');
    //   } else {
    //     this.currentStatus = 'unknown';
    //     console.log('Unknown');
    //   }
    // }, 2000);
  }

  //============
  //  Component Lifecycle or Lifecycle Hooks
  //============
  // A component goes through a series of phases from creation to destruction.
  // Angular provides lifecycle hooks that give us the opportunity to act at specific points in this lifecycle.
  // One of the most commonly used lifecycle hooks is ngOnInit.
  // means its like the events in javascript 
  // ngOnInit is called once, after the first ngOnChanges.
  
  //============
  // ngOnInit
  // ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  // It is a good place to put initialization logic for the component.
  //============
  ngOnInit(){
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
