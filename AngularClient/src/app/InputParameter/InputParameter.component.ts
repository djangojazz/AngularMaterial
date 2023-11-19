import { Component, OnInit } from '@angular/core';
import * as Data from '../../assets/Services.json';
import { ServiceModel } from '../Models/Service.model';

@Component({
  selector: 'app-InputParameter',
  templateUrl: './InputParameter.component.html',
  styleUrls: ['./InputParameter.component.css']
})
export class InputParameterComponent implements OnInit {
  selected: string = '';
  selects: string[] = ['select1', 'select2', 'selectagain'];
  items: ServiceModel[] = [];
  selectedItem: ServiceModel = { Service: '', Dev: 0, QA: 0};
  json = Data;

  constructor() { 
      this.items = this.json.Services.map(x => ({Service: x.ServiceName, Dev: +x.Dev, QA: +x.QA}));
  }

  ngOnInit() {
  }

  Onselected(): string {
    return this.selected;
  }
}
