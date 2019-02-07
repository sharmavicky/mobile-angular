import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MainComponent } from './main/main.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HistoryComponent } from './history/history.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { OffersComponent } from './offers/offers.component';

import { LoginService } from './login.service';
import {MatTableDataSource} from '@angular/material'; 

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    HistoryComponent,
    OffersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
