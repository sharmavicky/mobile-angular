import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  showTransactionUrl : string ="/mobilerecharge/user/show/";

  constructor(private http: HttpClient) { }

  getTransactions(userId: number): Observable<any[]>{
    this.showTransactionUrl =`${this.showTransactionUrl}${userId}`
    
    console.log(this.showTransactionUrl);
    return this.http.get<any[]>(this.showTransactionUrl);

  }
}
