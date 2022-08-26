import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { CardComponent } from './card/card.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    CardComponent,
    Child2Component,
    Child3Component
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
