import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/Models/entry.model';

@Component({
  selector: 'entry-header',
  templateUrl: './entry-header.component.html',
  styleUrls: ['./entry-header.component.scss']
})
export class EntryHeaderComponent implements OnInit {
  @Input() item: Entry = { id: 0, desc: ''};

  constructor() { }

  ngOnInit() {
  }

}
