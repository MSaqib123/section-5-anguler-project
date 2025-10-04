import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

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

// export class ServerStatusComponent implements OnInit,OnDestroy {
export class ServerStatusComponent implements OnInit {

  // typo type or enum type
  //currentStatus:'online'|'offline'|'unknown' = 'online';

  //==== Signals ====
  currentStatus = signal<'online'|'offline'|'unknown'>('online');

  //============= 1st way =============
  // Cannot find namespace 'NodeJS'
  //private interval? : NodeJS.Timeout
  // private interval? : ReturnType<typeof setInterval>;

  //============ 2nd way =============
  // DestroyRef is a service that provides a way to register cleanup callbacks that are called when the component is destroyed.
  // private destroyRef: DestroyRef
  private destroyRef = inject(DestroyRef);

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


    //============= Signals Effect =============
    effect(() => {
      console.log(this.currentStatus());
    });
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
  // ngOnInit(){
  //   // this.interval = setInterval(() => {
  //   const interval = setInterval(() => {
  //     const rnd = Math.random();

  //     if(rnd < 0.5) {
  //       this.currentStatus = 'online';
  //       // console.log('Online');
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //       // console.log('Offline');
  //     } else {
  //       this.currentStatus = 'unknown';
  //       // console.log('Unknown');
  //     }
  //   }, 2000);

  //   this.destroyRef.onDestroy(() => {
  //     clearInterval(interval);
  //   })
  // }



  //============
  // Singlal Working
  //============
  ngOnInit(){
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
        // console.log('Online');
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
        // console.log('Offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
        // console.log('Unknown');
      }
    }, 2000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }




  //============ 1. older way of disposing the component =============
  // ngOnDestroy is a lifecycle hook that is called just before Angular destroys the directive/component.
  // It is a good place to clean up resources, unsubscribe from observables, and detach event handlers to avoid memory leaks.
  //============
  // ngOnDestroy(){
  //   clearInterval(this.interval);
  // }
}
