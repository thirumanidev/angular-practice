import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Child1Component } from './child1/child1.component';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [
    {
      name: 'Bell',
      phone: '9874563210'
    },
    {
      name: 'Aariya',
      phone: '8796541320'
    }
  ];
  
}
