import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../Models/entry.model';
import { TestService } from '../Test.service';

@Component({
  selector: 'app-Entry',
  templateUrl: './Entry.component.html',
  styleUrls: ['./Entry.component.scss']
})
export class EntryComponent implements OnInit {
  entry$: Observable<Entry> = this.service.getItem();

  constructor(private readonly service: TestService) { }

  ngOnInit() {
  }

}
