import { Injectable, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Entry } from './Models/entry.model';
import { environment } from '../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private endpoint = `${environment.api}weatherforecast`;
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) {}

  public getItem = (): Observable<Entry> => this.http.get<Entry>(`${this.endpoint}`, { headers: this.headers });
}


