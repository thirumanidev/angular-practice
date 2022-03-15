import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input("inpFromParent") inpFromParent!: number;

  // www.abc.com/child1/100
  a!: number
  constructor() {
    this.a = 10;
    // throw new Error("My Error");
    console.log("%cConstructor - Child1 - InpValue: "+this.inpFromParent, 'color: #fff; font-weight: 600; background: #7f4941; padding: 3px 5px; margin-left: 25px;');
    console.log("%cConstructor - Child1", 'color: #fff; font-weight: 600; background: #7f4941; padding: 3px 5px; margin-left: 25px;');
  }
  ngOnInit() {
    console.log("%cngOnInit - Child1 - InpValue: "+this.inpFromParent, 'color: #fff; font-weight: 600; background: #7f4941; padding: 3px 5px; margin-left: 25px;');
    console.log("%cngOnInit - Child1", 'color: #fff; font-weight: 600; background: #7f4941; padding: 3px 5px; margin-left: 25px;');
  }

  ngOnDestroy() {
    console.log("%cngOnDestroy - Child1", 'color: #fff; font-weight: 600; background: #7f4941; padding: 3px 5px; margin-left: 25px;');
  }

}
