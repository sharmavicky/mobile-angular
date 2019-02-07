import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material';
import {FormControl} from '@angular/forms';
import { OperatorsService } from '../operators.service';
import { LoginService } from '../login.service';
import { OffersService } from '../offers.service';
import { Route, Router } from '@angular/router';
import { Offer } from './offer';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})

export class MobileComponent implements OnInit {

  Operators: any[];
  Offers:Offer[];
  recharge = false;

  amount:number=0;
  submit() {
    console.log("recharge sucessfull");
    this.recharge = true;


   /* this.router.navigateByUrl('/history', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/mobile"])); */
    

  }
  constructor(private operatorsService: OperatorsService, private offersService: OffersService,private loginService:LoginService) { }
 
  getOffers(event)
  {
    console.log(event);
    this.offersService.getOffers(event).subscribe(
      data => {
        this.Offers = data;
      },

    );
  
  }


  getAmount(event){
    console.log(event);    
    for(let offer of this.Offers){
      if(offer.id==event){
        this.amount=offer.amount;
      }
    }    
  }
  ngOnInit() {
    this.operatorsService.getOperators().subscribe(
      data => {
        this.Operators = data;
        console.log(data);
        console.log(this.Operators);
      },
    );
    console.log(this.loginService.userid);
    console.log(this.loginService.userEmail);
  }
  
}
