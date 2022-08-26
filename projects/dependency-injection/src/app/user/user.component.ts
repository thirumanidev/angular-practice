import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  mySMS_sent_count!: number;

  constructor(private smsService: SmsService) { }

  ngOnInit(): void {
    this.smsService.smsObservable$.subscribe(x=> {
      this.mySMS_sent_count = x;
    })
  }

  sendSMS() {
    this.smsService.send();
  }

}
