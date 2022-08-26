import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdminModule } from '../admin/admin.module';
import { AppModule } from '../app.module';
import { HomeModule } from '../home/home.module';

// @Injectable({
//   providedIn: 'root' // 'root', 'any', 'platform'
// })
export class SmsService {

  private smsSubject: BehaviorSubject<number>;
  public smsObservable$: Observable<number>;

  constructor() {     
    this.smsSubject = new BehaviorSubject<number>(0);
    this.smsObservable$ = this.smsSubject.asObservable();
  }

  send() {
    console.log("SMS sent!");
    let smsCount = this.smsSubject.value;
    smsCount++;
    this.smsSubject.next(smsCount);
  }
}
