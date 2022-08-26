import { Component, OnInit } from '@angular/core';
import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-shared-child1',
  templateUrl: './shared-child1.component.html',
  styleUrls: ['./shared-child1.component.scss']
})
export class SharedChild1Component implements OnInit {

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
