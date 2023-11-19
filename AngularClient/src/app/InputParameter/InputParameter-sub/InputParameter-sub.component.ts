import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ServiceModel } from 'src/app/Models/Service.model';

@Component({
  selector: 'app-InputParameter-sub',
  templateUrl: './InputParameter-sub.component.html',
  styleUrls: ['./InputParameter-sub.component.css']
})
export class InputParameterSubComponent implements OnInit {
    @Input('service') service: ServiceModel = { Service: '', Dev: 0, QA: 0};
    link: string = '';

    constructor() { 
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.service.Service === 'Credit Bureau Service') {
            this.link = 'https://www.google.com';
        } else if (this.service.Service === 'Model Provider Service') {
            this.link = 'https://www.yahoo.com';
        } else if (this.service.Service === 'Application Service (HTTPS)') {
            this.link = 'https://www.wikipedia.com';
        }
    }

}

/*
		{"ServiceName":"Credit Bureau Service", "Dev": 31046, "QA": 32046 },
		{"ServiceName":"Model Provider Service", "Dev": 31052, "QA": 32052 },
		{"ServiceName":"Application Service (HTTPS)", "Dev": 31066, "QA": 32066 }
*/