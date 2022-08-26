import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @ContentChild("userName", {static: true}) nameContent!: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.nameContent.nativeElement.innerHTML);
    
  }

  ngAfterContentInit() {
    // alert("Hi, "+this.nameContent.nativeElement.innerText);
    this.nameContent.nativeElement.style.color = "red";
  }

}
