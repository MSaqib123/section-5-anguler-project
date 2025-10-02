import { Component, ElementRef, input, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //===================================
  //================= Angular Decorator @ViewChild / @ViewChildren ===================
  //===================================
  //======= Direct Compoennt of button =========
  // @ViewChild(ButtonComponent) submitButton: ButtonComponent;

  // ======= Direct Template Variables =========
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // ======= Multiple Element Select =========
  // @ViewChildren('btn') buttons?: ElementRef<HTMLButtonElement>;
  // @ViewChildren(ButtonComponent) buttons?: ElementRef<HTMLButtonElement>;

  //===================================
  //================= signals ===================
  //===================================
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // onSubmit(titleInput:HTMLInputElement,textArea:HTMLTextAreaElement) {  
  // onSubmit(titleInput:string,textArea:string,form:HTMLFormElement) {  
  onSubmit(titleInput:string,textArea:string) {  
    // console.log('Form submitted', titleInput.value, textArea.value);
    // console.dir(titleInput);
    // console.dir(textArea);

    console.log(titleInput);
    console.log(textArea);
    // form.reset();

    //========= Decorator ==============
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();

    //exited
  } 



}
