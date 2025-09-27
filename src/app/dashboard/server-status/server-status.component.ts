import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
//=========== interface or structure of the component =============
// to avoid the ngInit error we have to implement the OnInit interface
// becuase Angular does not know that we are using the ngOnInit lifecycle hook
// so now when we type  small case ngOnInit to ngoninit it will give error
// so to avoid this error we have to implement the OnInit interface and to implement correct structure
export class ServerStatusComponent implements OnInit,OnDestroy {
  // typo type or enum type
  currentStatus:'online'|'offline'|'unknown' = 'online';

  // Cannot find namespace 'NodeJS'
  //private interval? : NodeJS.Timeout
  private interval? : ReturnType<typeof setInterval>;

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
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        this.currentStatus = 'online';
        // console.log('Online');
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
        // console.log('Offline');
      } else {
        this.currentStatus = 'unknown';
        // console.log('Unknown');
      }
    }, 2000);
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
