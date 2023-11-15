import { Component, OnInit } from '@angular/core';
import { ContractRequestRule } from './Models/ContractRequestRule.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularMaterial';
  rules: ContractRequestRule[] = [];
  selects: string[] = ['select1', 'select2', 'selectagain'];
  select = '';

  ngOnInit(): void {
  }

}

