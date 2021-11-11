import { Component, OnInit } from '@angular/core';
import { MarginDifference } from '../Models/MarginDifference.model';
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-ChangeLog',
  templateUrl: './ChangeLog.component.html',
  styleUrls: ['./ChangeLog.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class ChangeLogComponent implements OnInit {
  marginChanges: MarginDifference[]  = MARGIN_DIFFERENCES;
  expandedElement: MarginDifference[] | undefined;
  fields = ['groupId', 'fieldName', 'previousMarginValue', 'currentMarginValue', 'effectiveDate'];
  constructor() { }

  ngOnInit() {
  }

  OnDateChange(groupId: number, name: string, eventDate: Date) {
    if(groupId === undefined) {
      const index = this.marginChanges.findIndex(x => x.fieldName === name);
      const margin: MarginDifference = this.marginChanges[index];
      margin.effectiveDate = eventDate;
    } else {
      const subset: MarginDifference[] = this.marginChanges.filter(x => x.groupId === groupId)[0].subFields || [];
      const index = subset.findIndex(x => x.fieldName === name);
      const margin: MarginDifference = subset[index];
      margin.effectiveDate = eventDate;
    }
    
  }

  
  onClick() {
    const subitems = this.marginChanges.filter(x => x.subFields !== undefined).map(x => x.subFields || [])
      .reduce((accumulator, value) => accumulator.concat(value), [])
      .filter(x => x.canHaveEffectiveDate);
    console.log(this.marginChanges, 'changes');
  }
}


const MARGIN_DIFFERENCES: MarginDifference[] = [
  {fieldName:"Bill Rate",canHaveEffectiveDate:false,groupId:1, groupLabel:"Bill Rate",shouldSendEmail:false,subFields:
    [
      {fieldName:"Base Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"55.00",currentMarginValue:"65.00",groupId:1,shouldSendEmail:true},
      {fieldName:"OT Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75", groupId:1,shouldSendEmail:true},
      {fieldName:"Premium Bill Rate",canHaveEffectiveDate:false,previousMarginValue:"55.00",currentMarginValue:"65.00",groupId:1,shouldSendEmail:false},
      {fieldName:"Callback Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75",groupId:1,shouldSendEmail:true},
      {fieldName:"Holiday Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75",groupId:1,shouldSendEmail:true}
    ]},
    {fieldName:"Pay Rate",canHaveEffectiveDate:false,groupId:2, groupLabel:"Pay Rate",shouldSendEmail:true, subFields: 
    [
      {fieldName:"Base Pay Rate",canHaveEffectiveDate:true,previousMarginValue:"55.00",currentMarginValue:"65.00",groupId:2,shouldSendEmail:true},
      {fieldName:"OT Pay Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75", groupId:2,shouldSendEmail:true}
    ]},
    {fieldName:"Weekly Housing",canHaveEffectiveDate:true,previousMarginValue:"600.04",currentMarginValue:"819.00",shouldSendEmail:true},
    {fieldName:"Facility Fees/Discounts",canHaveEffectiveDate:false,previousMarginValue:"Contract Fees 0.00% Early Payment Dicount 0.00%",currentMarginValue:"Contract Fees 5.00% Early Payment Dicount 0.00%",shouldSendEmail:false}
]