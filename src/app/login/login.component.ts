import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private http: HttpClient, private router: Router, private loginService: LoginService, private route: ActivatedRoute, public authservice: AuthService) { }

  ngOnInit() {
    console.log("login");
  }
  login() {
    this.router.navigate(['employee']);
  }
  getErrorMessage() {
    
  }

  add(mobileNumber: string, password: string) {

    console.log("inside login");
    // The server will generate the id for this new login 
    //const newUser: Login = { userName, passWord } as Login;

    let json = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });
    console.log(json);
    this.loginService.authenticate(json)
      .subscribe(data => {
        console.log(data);
        if (data!=null) {
          this.authservice.login();
        }
        else {
          return false;
        }
        
      }
      );
  }

  

}
