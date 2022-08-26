import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsService } from './services/sms.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    // SmsService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
