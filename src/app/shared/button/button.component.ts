import { Component, input } from '@angular/core';

@Component({
  //========== Element selector ==========
  // Use this selector to apply the component as an attribute to a native HTML element.
  // Example: <button app-button></button>
  // selector: '[app-button]',
  //selector: 'app-button',

  //========== Attribute selector ==========
  // Use this selector to apply the component as an attribute to a native HTML element.
  // Example: <button appButton></button>
  // selector: '[appButton]',

  //========== Only button Attribute selector ==========
  // Use this selector to apply the component only to <button> elements with the appButton attribute.
  // Example: <button appButton></button>
  // selector: 'button[appButton]',


  //========== Class selector ==========
  // Use this selector to apply the component to any HTML element with the app-button class.
  // Example: <button class="app-button"></button>
  // selector: '.appButton',

  //========== only button Class selector ==========
  // Use this selector to apply the component only to <button> elements with the app-button class.
  // Example: <button class="app-button"></button>
  // selector: 'button.appButton',


  //========== Multi Selector ==========
  // Use this selector to apply the component to multiple types of HTML elements with the appButton attribute.
  // Example: <button appButton></button>, <a appButton></a>, <input appButton>
  selector: 'button[appButton], a[appButton], input[appButton]',


  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  //=============== signal input property ===============
  // Define a required input property 'label' of type string using Angular's signal system.
  // label = input.required<string>();
  
}
