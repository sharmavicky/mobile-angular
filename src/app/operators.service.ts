import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  url: string = "/mobilerecharge/operator/list";
  constructor(private http:HttpClient) { }
  getOperators() : Observable<any[]> {
console.log("hello");
    return this.http.get<any[]>(this.url);
 
   }
}
