import { AfterViewInit, Component, ElementRef, input, OnInit, output, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

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
  @ViewChild('form') formforHuck?: ElementRef<HTMLFormElement>;

  add = output<{title:string;text:string}>();

  
  ngOnInit(): void {
    console.log();
    console.log(this.formforHuck?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('After ViewInit called');
    console.log(this.formforHuck?.nativeElement);
  }


  //=========== NgModel 2 way binding ============
  titleInput='';
  textArea='';

  // onSubmit(titleInput:HTMLInputElement,textArea:HTMLTextAreaElement) {  
  // onSubmit(titleInput:string,textArea:string,form:HTMLFormElement) {  
  // onSubmit(titleInput:string,textArea:string) {  
  onSubmit() {  
    // console.log('Form submitted', titleInput.value, textArea.value);
    // console.dir(titleInput);
    // console.dir(textArea);

    // console.log(titleInput);
    // console.log(textArea);
    // form.reset();

    //========= Decorator ==============
    // this.form?.nativeElement.reset();

    //========= Signals ==============
    //this.form().nativeElement.reset();

    //exited

    //========
    //this.add.emit({title:titleInput,text:textArea});

    this.add.emit({
      title:this.titleInput,
      text:this.textArea
    })

    this.titleInput = '';
    this.textArea = '';
    
  } 



}
