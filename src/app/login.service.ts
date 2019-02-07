import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}; 


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userid:number;
  userEmail:string;
  url: string = "/mobilerecharge/rest/authenticate";


  constructor(private http: HttpClient) { }



     
  authenticate(json): Observable<any> {
    return this.http.post<any>(this.url, json , httpOptions);
  }
  
}
