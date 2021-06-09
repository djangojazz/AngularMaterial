import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { ContractRequestRule } from '../Models/ContractRequestRule.model';

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
  @Input() rules: ContractRequestRule[] = [];
  displayedColumns: string[] = [ "review", "ruleName", "title", "attachment", "note" ];
  
  dataSource = DOC_DATA;
  columnsToDisplay = ['document', 'timestamp'];
  expandedElement: Doc | undefined;

  constructor() { }

  ngOnInit() {
    this.rules = [
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
      },
      {
        "id": 1227426,
        "updatedByName": "Adam Boyle",
        "ruleName": "4/12s",
        "title": "Account Manager",
        "approver": "Meredith Reid",
        "changeFields": "shifts,shiftHours",
        "contractRequestId": 419220,
        "contractRequestRuleTypeId": 7,
        "isApproved": null,
        "dateUpdated": new Date("2021-06-07T00:00:00"),
        "updatedBy": 1459159,
        "ncNote": null,
        "attachments": [
          {
            "id": 910830,
            "contractRequestRuleId": 1227426,
            "fileName": "FW_ Zachary Williams - Extension.msg",
            "path": "contract-requests/d32c9dab-9e46-4183-a016-e777b8002925",
            "uploadedByName": "Adam Boyle",
            "uploadDate": new Date("2021-06-07T11:48:38.003"),
            "content": null,
            "description": null
          }
        ]
      },
      {
        "id": 1227427,
        "updatedByName": "Adam Boyle",
        "ruleName": "Time Off Approval",
        "title": "Account Manager",
        "approver": "Meredith Reid",
        "changeFields": "vacation,pendingFacilityApproval,timeOff",
        "contractRequestId": 419220,
        "contractRequestRuleTypeId": 6,
        "isApproved": null,
        "dateUpdated": new Date("2021-06-07T00:00:00"),
        "updatedBy": 1459159,
        "ncNote": null,
        "attachments": [
          {
            "id": 910831,
            "contractRequestRuleId": 1227427,
            "fileName": "FW_ Zachary Williams - Extension.msg",
            "path": "contract-requests/ff186530-e185-40e4-843f-074d3bc4809e",
            "uploadedByName": "Adam Boyle",
            "uploadDate": new Date("2021-06-07T11:48:40.447"),
            "content": null,
            "description": null
          }
        ]
      }
    ]
  }
}

export interface Doc {
  document: string;
  timestamp: number;
}

const DOC_DATA: Doc[] = [
  { document: 'document1', timestamp: 111223 },
  { document: 'document2', timestamp: 222554 },
  { document: 'document3', timestamp: 335456 }
];