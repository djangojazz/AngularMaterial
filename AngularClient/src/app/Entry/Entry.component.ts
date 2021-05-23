import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Entry } from '../Models/entry.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-Entry',
  templateUrl: './Entry.component.html',
  styleUrls: ['./Entry.component.scss']
})
export class EntryComponent implements OnInit {
  entry$: Observable<Entry> = this.service.getItem();
  entry2$: Observable<Entry> = this.service.getItem();
  loading$: Observable<boolean> = of(true);

  constructor(private readonly service: TestService) { }

  ngOnInit() {
    combineLatest([this.entry$, this.entry2$]).pipe(x => this.loading$ = of(false));
  }

}
