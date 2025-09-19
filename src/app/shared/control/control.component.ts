import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //======= default attibute and value to give component =======
  host : {
    class:"control",
  },
  
  //======= remove scoped css global =======
  encapsulation: ViewEncapsulation.None, // ViewEncapsulation.None
})
export class ControlComponent {
  label = input<string>();
}
