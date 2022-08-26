import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SmsService } from '../services/sms.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminChild1Component } from './admin-child1/admin-child1.component';

export const routes = [
  { path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminChild1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SmsService
  ]
})
export class AdminModule { }
