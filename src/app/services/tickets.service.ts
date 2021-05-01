import { Injectable } from '@angular/core';
import { TicketI } from '../models/ticket.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url: string = "http://localhost:3000/api/ticket/list";

  constructor(private _http: HttpClient) { }

  getTickets(): Observable<TicketI[]> {
    return this._http.get<TicketI[]>(this.url);
  }

}
