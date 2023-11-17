import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-InputParameter',
  templateUrl: './InputParameter.component.html',
  styleUrls: ['./InputParameter.component.css']
})
export class InputParameterComponent implements OnInit {
  selected: string = '';
  selects: string[] = ['select1', 'select2', 'selectagain'];

  constructor() { }

  ngOnInit() {
  }

  Onselected(): string {
    return this.selected;
  }
}
