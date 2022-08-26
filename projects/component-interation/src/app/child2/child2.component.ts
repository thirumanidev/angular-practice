import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Input("isShow") isShow!: boolean;
  @ContentChild(TemplateRef) public childContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
