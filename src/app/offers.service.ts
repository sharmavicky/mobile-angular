import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  showOffersUrl: string = "/mobilerecharge/offers/list/";
  constructor(private http: HttpClient) { }
  getOffers(operatorId: number) : Observable<any[]> {
    console.log("hello");
    this.showOffersUrl=`${this.showOffersUrl}${operatorId}`
        return this.http.get<any[]>(this.showOffersUrl);
     
       }
}
