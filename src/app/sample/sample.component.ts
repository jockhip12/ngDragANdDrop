import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'sample-dragdrop',
  templateUrl: './sample.component.html',
})
export class Sample {
msg = '';
options: any = {
  removeOnSpill: true
}
 items = [
    'Candlestick',
    'Dagger',
    'Revolver',
    'Rope',
    'Pipe',
    'Wrench'
  ];
constructor(private dragula: DragulaService) {
  
    dragula.setOptions('third-bag', {
      removeOnSpill: true
    });

 }
ngOnInit() {
    this.dragula
      .drag
      .subscribe(value => {
        console.log(`Dragging the ${ value[0] }!`);
        this.onDrag(value.slice(1));

      });

    this.dragula
      .drop
      .subscribe(value => {
        console.log(`Dropped the ${ value[0].innerText }!`);

        setTimeout(() => {
          this.msg = '';
        }, 1000);
      });
    this.dragula.over.subscribe((value) => {
      console.log(`over: ${value[0].innerText}!`);
    });
    this.dragula.out.subscribe((value) => {
      console.log(`out: ${value[0].innerText}!`);
    });
      //console.log(this.dragula);
}

 private onDrag(args) {
    let [e, el] = args;
    console.log(args);
  }
  
  private onDrop(args) {
    let [e, el] = args;
    // do something
  }
  
  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }
  
  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

}
