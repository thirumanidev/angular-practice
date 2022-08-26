import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Child3 initialized");
  }
  ngOnDestroy(): void {
    console.log("Child3 destroyed");
  }

}
