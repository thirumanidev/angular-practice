import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedChild1Component } from './shared-child1/shared-child1.component';
import { SmsService } from '../services/sms.service';



@NgModule({
  declarations: [
    SharedChild1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedChild1Component
  ],
  providers: [
    // SmsService
  ]
})
export class SharedModule { }
