import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Entry } from './Models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

constructor() { }

  public getItem(): Observable<Entry> {
    timer(2000);
    return of({ id: 1, desc: 'test'});
  }

}


