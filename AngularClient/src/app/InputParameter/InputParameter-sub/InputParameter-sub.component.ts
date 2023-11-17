import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-InputParameter-sub',
  templateUrl: './InputParameter-sub.component.html',
  styleUrls: ['./InputParameter-sub.component.css']
})
export class InputParameterSubComponent implements OnInit {
  @Input('parameterName') parameterName = '';

  constructor() { 
  }

  ngOnInit() {
    console.log('parameterName', this.parameterName);
  }

}
