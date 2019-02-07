import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { SignupComponent } from './signup/signup.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [

  {path: "mobile", component: MobileComponent},
 
  {path:"history",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
