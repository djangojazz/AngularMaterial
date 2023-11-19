import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/Models/Service.model';

@Component({
  selector: 'app-InputParameter-sub',
  templateUrl: './InputParameter-sub.component.html',
  styleUrls: ['./InputParameter-sub.component.css']
})
export class InputParameterSubComponent implements OnInit {
    @Input('parameterName') parameterName = '';
    @Input('service') service: ServiceModel = { Service: '', Dev: 0, QA: 0};

    constructor() { 
    }

    ngOnInit() {
    }

}
