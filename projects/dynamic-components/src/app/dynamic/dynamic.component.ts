import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
