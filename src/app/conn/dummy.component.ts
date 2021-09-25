import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  // title = 'ng-autocomplete';
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  selecedItem: any;
  
   selectionChange(option) {
 
    //this is fired when an option becomes selected , 
    //I need a way to clear selecedItem if the user clear the control
     this.selecedItem = option;

     console.log(this.selecedItem)
    }

}
