import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { ContractRequestRule } from '../Models/ContractRequestRule.model';
import { ContractRequestAttachment } from '../Models/ContractRequestAttachment.model';
import { MarginDifference } from '../Models/MarginDifference.model';

@Component({
  selector: 'app-Material-Table',
  templateUrl: './Material-Table.component.html',
  styleUrls: ['./Material-Table.component.scss'],
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
export class MaterialTableComponent implements OnInit {
  @Input() rules: ContractRequestRule[] = RULE_DATA;
  marginChanges: MarginDifference[]  = MARGIN_DIFFERENCES;
  columnsToDisplay = [ 'review', 'ruleName', 'title', 'attachment', 'note'];
  expandedElement: ContractRequestAttachment[] | undefined;
  columnsToDisplay2 = ['name', 'weight', 'symbol', 'position'];
  fields = ['groupId', 'fieldName', 'previousMarginValue', 'currentMarginValue', 'effectiveDate'];
  constructor() { }

  ngOnInit() {
  }


  
}

export interface Doc {
  document: string;
  timestamp: number;
}

const RULE_DATA: ContractRequestRule[] = [
  {
    "id": 1227424,
    "updatedByName": "Adam Boyle",
    "ruleName": "Margin Approval",
    "title": "Team Lead",
    "approver": "",
    "changeFields": "marginPct",
    "contractRequestId": 419220,
    "contractRequestRuleTypeId": 22,
    "isApproved": null,
    "dateUpdated": new Date("2021-06-07T00:00:00"),
    "updatedBy": 1459159,
    "ncNote": null,
    "attachments": [
      {
        "id": 910828,
        "contractRequestRuleId": 1227424,
        "fileName": "FW_ Zachary Williams - Extension.msg",
        "path": "contract-requests/1d096d20-c11a-42ce-af8c-211ecc1224b9",
        "uploadedByName": "Adam Boyle",
        "uploadDate": new Date("2021-06-07T11:48:30.757"),
        "content": null,
        "description": null
      },
      {
        "id": 910829,
        "contractRequestRuleId": 1227424,
        "fileName": "FW_BoopBoop - Extension.msg",
        "path": "contract-requests/lksdjf;laskdfosadifasdl;fkjasd;fljk",
        "uploadedByName": "Adam Boyle",
        "uploadDate": new Date("2021-06-07T11:48:30.757"),
        "content": null,
        "description": null
      }
    ]
  },
  {
    "id": 1227425,
    "updatedByName": "Adam Boyle",
    "ruleName": "Prem Margin Approval",
    "title": "Team Lead",
    "approver": "Xander Nelson, ",
    "changeFields": "premiumBillRate,overtimePayRate",
    "contractRequestId": 419220,
    "contractRequestRuleTypeId": 3,
    "isApproved": null,
    "dateUpdated": new Date("2021-06-07T00:00:00"),
    "updatedBy": 1459159,
    "ncNote": null,
    "attachments": [
      {
        "id": 910829,
        "contractRequestRuleId": 1227425,
        "fileName": "FW_ Zachary Williams - Extension.msg",
        "path": "contract-requests/85167115-4a4e-4187-bdbe-81aa3a5a128f",
        "uploadedByName": "Adam Boyle",
        "uploadDate": new Date("2021-06-07T11:48:33.57"),
        "content": null,
        "description": null
      }
    ]
  }
]

const MARGIN_DIFFERENCES: MarginDifference[] = [
  {fieldName:"Bill Rate",canHaveEffectiveDate:false,groupId:2, groupLabel:"Bill Rate",shouldSendEmail:false,subFields:
    [
      {fieldName:"Base Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"55.00",currentMarginValue:"65.00",groupId:2,shouldSendEmail:true},
      {fieldName:"OT Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75", groupId:2,shouldSendEmail:true},
      {fieldName:"Premium Bill Rate",canHaveEffectiveDate:false,previousMarginValue:"55.00",currentMarginValue:"65.00",groupId:2,shouldSendEmail:false},
      {fieldName:"Callback Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75",groupId:2,shouldSendEmail:true},
      {fieldName:"Holiday Bill Rate",canHaveEffectiveDate:true,previousMarginValue:"74.25",currentMarginValue:"87.75",groupId:2,shouldSendEmail:true}
    ]},
    {fieldName:"Weekly Meals",canHaveEffectiveDate:true,previousMarginValue:"399.98",currentMarginValue:"448.00",shouldSendEmail:true}
    // {fieldName:"Weekly Housing",canHaveEffectiveDate:true,previousMarginValue:"600.04",currentMarginValue:"819.00",shouldSendEmail:true},
    // {fieldName:"Facility Fees/Discounts",canHaveEffectiveDate:false,previousMarginValue:"Contract Fees 0.00% Early Payment Dicount 0.00%",currentMarginValue:"Contract Fees 5.00% Early Payment Dicount 0.00%",shouldSendEmail:false}
]