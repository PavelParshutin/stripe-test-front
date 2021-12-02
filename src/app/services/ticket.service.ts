import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ITicket } from "src/app/interfaces/ticket.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  public getTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${environment.apiUrl}/tickets`);
  }

  public getHistory(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${environment.apiUrl}/tickets/history`)
  }

  public addToHistory(id: string): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/tickets/history/${id}`, {});
  }
}
