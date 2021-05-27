import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';
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
  //loading$ = new BehaviorSubject<boolean>(true);
  combined$: Observable<{ val1: Entry, val2: Entry}>;

  constructor(private readonly service: TestService) { 
    //combineLatest([this.entry$, this.entry2$]).pipe(finalize( ()=> this.loading$.next(false) )).subscribe();
    this.combined$ = combineLatest([this.entry$, this.entry2$]).pipe(map(([val1, val2]) => ({val1, val2})));
}

  ngOnInit() {
  }

}
