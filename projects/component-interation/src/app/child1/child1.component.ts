import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  propStr: string = "Hello Angular!";

  constructor() { }

  ngOnInit(): void {
  }

}
