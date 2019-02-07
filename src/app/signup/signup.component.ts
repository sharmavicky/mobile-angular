import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupServiceService } from '../signup-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
message:boolean;
hide=true;
regiForm = this.fb.group({
  mobileNumber: ['',Validators.required],
  email: ['',Validators.required],
  password: ['',Validators.required],
});
  constructor( private fb: FormBuilder,private signupService:SignupServiceService) { }
  ngOnInit() { }
  onSubmit()
  {
    this.message=false;
    console.log("onSubmit called");
    console.log(JSON.stringify(this.regiForm.value));
    this.signupService.signup(JSON.stringify(this.regiForm.value))
    .subscribe(data => {
      console.log("success"); 
      this.message=true;
      console.log(this.message);
    }
    );
  }
}
