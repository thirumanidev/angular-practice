import { Component, OnInit } from '@angular/core';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
