import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SmsService } from '../services/sms.service';

export const routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ],
  providers: [
    SmsService 
  ]
})
export class HomeModule { }
