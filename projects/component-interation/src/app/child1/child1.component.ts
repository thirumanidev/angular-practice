import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() inpPropStr!: string;
  @Input() inpPropBool!: boolean;
  @Input() inpPropArray!: string[];
  @Input() inpPropObj!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
