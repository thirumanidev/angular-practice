import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  propStr: string = "I'm string";
  propBool: boolean = true;
  propArray: string[] = ['apple', 'orange'];
  propObj: User = {name: 'thiru', regNo: 101};

  myBusinessLogics() {
    alert('Hi, Angular Fans!');
  }
}
