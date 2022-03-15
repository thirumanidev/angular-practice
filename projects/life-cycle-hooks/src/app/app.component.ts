import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle-hooks';
  isChild1Activated: boolean = false;
  dynamicQueryVal: number = 1;
  
  constructor() {
    console.log("%cConstructor - App", 'color: #fff; font-weight: 600; background: lightcoral; padding: 3px 5px;');
  }
  ngOnInit() {
    
    console.log("%cngOnInit - App", 'color: #fff; font-weight: 600; background: lightcoral; padding: 3px 5px;');
  }
  changeDynamicQueryVal() {
    this.dynamicQueryVal++;
  }
}
