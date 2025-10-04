import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //======= default attibute and value to give component =======
  host : {
    class:"control",
    '(click)': 'onClick()'
  },
  //======= remove scoped css global =======
  encapsulation: ViewEncapsulation.None, // ViewEncapsulation.None
})
export class ControlComponent implements AfterContentInit{
  //===================================
  //#region 
  // Note ======= Host Binding =======
  // we have 2 ways to bind host element property
  // 1. @HostBinding('class.control') hostClass = '';
  // @HostBinding('class') className = 'control';
  // 2. host : { class:"control" } in @Component decorator
  // but mostly we use host: { class:"control" } in @Component decorator
  // because it is more readable and easier to manage
  // if we have multiple classes to bind
  //#endregion
  //===================================
  
  //===================================
  //#region 
  // Note ======= Host Listening @HostListener =======
  // we have 2 ways to listen host element event
  // 1. @HostListener('click') onClick() { console.log('clicked'); }
  // @HostListener('click') onClick() { console.log('clicked'); }
  // @HostListener('mouseover') onMouseOver() { console.log('mouse over'); }
  // @HostListener('mouseout') onMouseOut() { console.log('mouse out'); }
  
  
  // 2. host : { '(click)': 'onClick()' } in @Component decorator
  // onClick() {
  //    console.log('clicked'); 
  // }
  // onMouseOver() { console.log('mouse over'); }
  // onMouseOut() { console.log('mouse out'); }
  // mostly we use host : { '(click)': 'onClick()' } in @Component decorator
  // because it is more readable and easier to manage
  // if we have multiple events to listen
  //#endregion
  //===================================
  
//===================================
  //#region 
  // Note ======= Accessing Host Elements =======
  // ElementRef is a service that gives us access to the host element
  // we can use it to access the host element properties and methods
  // but we should be careful when using it because it can make our app vulnerable to XSS attacks
  // so we should avoid using it unless absolutely necessary
  // we can use it in combination with @HostListener and @HostBinding
  private el = inject(ElementRef);

  //=============== content child ===============
  // we can use @ContentChild to access the child element projected into the component
  // we can use it to access the child element properties and methods
  //=== Decorator Way ===
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  //=== signal Way ===
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // onClick method to log the host element
  onClick() {
     console.log(this.el); 

     //=== Decorator Way ===
     //console.log(this.control);

     //=== Signal Way ===
     console.log(this.control());

  }

  //#endregion
  //===================================
  

  @ContentChild('input') private control1?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ngAfterContentInit(): void {
    console.log(this.control1?.nativeElement);
  }

  label = input<string>();
}
