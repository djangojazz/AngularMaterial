import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entry } from '../Models/entry.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-Entry',
  templateUrl: './Entry.component.html',
  styleUrls: ['./Entry.component.scss']
})
export class EntryComponent implements OnInit {
  entry$: Observable<Entry> = this.service.getItem();
  loading$: Observable<boolean> = of(true);

  constructor(private readonly service: TestService) { }

  ngOnInit() {
    this.entry$.subscribe(x => this.loading$ = of(false));
  }

}
