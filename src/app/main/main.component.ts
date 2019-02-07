import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( public authservice: AuthService) { }

  ngOnInit() {
    $("span.menu").click(function () {
      $("ul.nav1").slideToggle(300, function () {
        // Animation complete.
      });
    });
  }
}

