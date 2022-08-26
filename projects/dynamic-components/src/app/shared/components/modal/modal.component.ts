import { Component, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalHostDirective } from './directives/modal-host.directive';

export interface ModalType {
  data: any;
}
export class ModalContent {
  constructor(public component: Type<any>, public data: any) {}
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // @ViewChild(ModalHostDirective, {static: true}) modalHost!: ModalHostDirective;
  // @ViewChild('modalHost', { read: ViewContainerRef }) public modalHost!: ViewContainerRef;
  // @ViewChild(ModalHostDirective, { read: ViewContainerRef, static: false }) public modalHost!: ViewContainerRef;
  @ViewChild(ModalHostDirective, {static: true}) modalHost!: ModalHostDirective;

  public componentRefs: ComponentRef<any>[] = []
  // @Input() inputComponent!: ModalContent;

  constructor() { }

  ngOnInit(): void {
    
  }

  open(inputcomponent: Type<any>, data: any) {
    console.log("Modal opening..");
    
    this.modalHost.viewContainerRef.clear();

    const componentRef = this.modalHost.viewContainerRef.createComponent<ModalType>(inputcomponent);
    componentRef.instance.data = data;
  }

}
