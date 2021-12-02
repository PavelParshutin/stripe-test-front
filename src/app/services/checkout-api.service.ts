import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ITicket } from "src/app/interfaces/ticket.interface";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {

  constructor(private http: HttpClient) {
  }

  public checkout(body: ITicket): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(`${environment.apiUrl}/checkout`, body).pipe(tap(res => console.log(res, 123)));
  }
}
