import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
