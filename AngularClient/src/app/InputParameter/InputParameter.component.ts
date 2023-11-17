import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-InputParameter',
  templateUrl: './InputParameter.component.html',
  styleUrls: ['./InputParameter.component.css']
})
export class InputParameterComponent implements OnInit {
  name: string = '';
  selects: string[] = ['select1', 'select2', 'selectagain'];

  constructor() { }

  ngOnInit() {
    console.log('onInit', this.name);
  }
}
