import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-InputParameter',
  templateUrl: './InputParameter.component.html',
  styleUrls: ['./InputParameter.component.css']
})
export class InputParameterComponent implements OnInit {
  name: string = '';

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get('name') || '';
    console.log('onInit', this.name);
  }
}
