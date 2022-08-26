import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ModalHostDirective } from './shared/components/modal/directives/modal-host.directive';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableContentComponent } from './table-content/table-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-components';

  openModal() {
    let modalComponent = new ModalComponent();
    modalComponent.open(TableContentComponent, "");

  }

  // @ViewChild('dynamic', { read: ViewContainerRef }) private viewRef!: ViewContainerRef;
  // @ViewChild(ModalHostDirective, { read: ViewContainerRef }) private viewRef!: ViewContainerRef;
  @ViewChild(ModalHostDirective, {static: true}) modalHost!: ModalHostDirective;

  showDynamicComponent(): void {
    // this.viewRef.clear();
    // this.viewRef.createComponent(DynamicComponent);
    this.modalHost.viewContainerRef.clear();

    const componentRef = this.modalHost.viewContainerRef.createComponent(DynamicComponent);
    // componentRef.instance.data = data;
  }

  removeDynamicComponent(): void {
    // this.viewRef.clear();
    this.modalHost.viewContainerRef.clear();
  }
}
