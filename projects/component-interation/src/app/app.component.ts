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

  @ViewChild("child1Ref", {static: true}) child1!: Child1Component;
  @ViewChild("ngSelectRef") ngSelectRef!: NgSelectComponent;
  @ViewChild("inpRef") inpRef!: ElementRef;

  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  constructor(private cdf: ChangeDetectorRef) {

  }

  ngOnInit() {
    // console.log(this.child1.propStr);
    // this.child1.propStr = "Hello World!";
  }

  ngAfterViewInit() {
    // console.log(this.child1);
    console.log(this.inpRef.nativeElement.value);
    
    this.child1.propStr = "Hello World!, ngAfterViewInit";
    // this.cdf.detectChanges();
  }
  
}
