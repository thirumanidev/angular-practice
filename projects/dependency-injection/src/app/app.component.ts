import { Component } from '@angular/core';
import { SmsService } from './services/sms.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    // SmsService
  ]
})
export class AppComponent {
  title = 'dependency-injection';

  constructor() {

  }

  
}
