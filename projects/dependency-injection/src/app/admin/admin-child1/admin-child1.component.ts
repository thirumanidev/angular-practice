import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-admin-child1',
  templateUrl: './admin-child1.component.html',
  styleUrls: ['./admin-child1.component.scss'],
  providers: [
    SmsService
  ]
})
export class AdminChild1Component implements OnInit {

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
