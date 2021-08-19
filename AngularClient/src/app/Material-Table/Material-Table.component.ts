import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { ContractRequestRule } from '../Models/ContractRequestRule.model';
import { ContractRequestAttachment } from '../Models/ContractRequestAttachment.model';
import { MarginDiffernce } from '../Models/MarginDifference.model';

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
  @Input() marginChanges: MarginDiffernce[]  = MARGIN_DIFFERENCES;
  columnsToDisplay = [ 'review', 'ruleName', 'title', 'attachment', 'note'];
  expandedElement: ContractRequestAttachment[] | undefined;
  columnsToDisplay2 = ['name', 'weight', 'symbol', 'position'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.marginChanges, 'changes');
  }

  OnDateChange(name: string, eventDate: Date) {
    const margin: MarginDiffernce = this.marginChanges[this.marginChanges.findIndex(x => x.fieldName === name)];
    margin.effectiveDate = eventDate;
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

const MARGIN_DIFFERENCES: MarginDiffernce[] = [
  { fieldName: "DentalVisionLife", canHaveEffectiveDate: true, previousMarginValue: "0.0000", currentMarginValue: "90.0000"},
  { fieldName: "Insurance", canHaveEffectiveDate: false, previousMarginValue: "No", currentMarginValue: "Yes"},
  { fieldName: "Medical", canHaveEffectiveDate: true, previousMarginValue: "0.0000", currentMarginValue: "90.0000"},
  { fieldName: "OnCallPay", canHaveEffectiveDate: true, previousMarginValue: "5.1500", currentMarginValue: "4.0000"},
  { fieldName: "WeeklyHousing", canHaveEffectiveDate: true, previousMarginValue: "1274.0000", currentMarginValue: "1163.0500", effectiveDate: new Date(2021, 7, 17, 17, 27, 20)},
  { fieldName: "WeeklyTotal", canHaveEffectiveDate: false, previousMarginValue: "1736.0000", currentMarginValue: "1625.0500"}
]

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];