import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { SmsService } from '../services/sms.service';

export const routes = [
  { path: '', component: UserComponent}
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ],
  providers: [
    SmsService
  ]
})
export class UserModule { }
