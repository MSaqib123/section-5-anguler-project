import { Component, input } from '@angular/core';
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

  // onSubmit(titleInput:HTMLInputElement,textArea:HTMLTextAreaElement) {  
  onSubmit(titleInput:string,textArea:string,form:HTMLFormElement) {  
    // console.log('Form submitted', titleInput.value, textArea.value);
    // console.dir(titleInput);
    // console.dir(textArea);

    console.log(titleInput);
    console.log(textArea);
    form.reset();

  } 



}
