import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalHostDirective } from './shared/components/modal/directives/modal-host.directive';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableContentComponent } from './table-content/table-content.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    ModalHostDirective,
    AppComponent,
    ModalComponent,
    TableContentComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
