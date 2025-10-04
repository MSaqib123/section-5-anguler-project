import { Component, EventEmitter, Input, model, Output, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //============ 1st Way ================
  // @Input({required:true}) size! : {width:string; height:string}
  // @Output() sizeChange = new EventEmitter<{width:string; height:string}>();

  //============ 1st Way ================
  // model is signls 
  size = model.required<{width:string; height:string}>()

  onReset() {
    // ...
    // this.size = {
    //   width:'200',
    //   height:'200'
    // }

    //=== 1st way ====
    // this.sizeChange.emit({
    //   width:'200',
    //   height:'200'
    // })

    //=== signal Way ====
    this.size.set({
      width:'200',
      height:'200'
    })
    
  }
}
