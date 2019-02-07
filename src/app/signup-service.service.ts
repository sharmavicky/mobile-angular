import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}; 

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  signupUrl: string = "/mobilerecharge/rest/signup";

  constructor(private http: HttpClient) { }   
  signup(regiForm): Observable<any> {
    console.log(regiForm);
    return this.http.post<any>(this.signupUrl, regiForm , httpOptions);
  }
}
