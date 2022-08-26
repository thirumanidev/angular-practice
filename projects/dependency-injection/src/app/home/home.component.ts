import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
