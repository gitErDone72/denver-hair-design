import { ApplicationRef, ComponentRef, EnvironmentInjector, Injectable, Type, createComponent } from '@angular/core';
import { IModalOptions } from '../components/modal/modal-options.model';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  newModalComponent!: ComponentRef<ModalComponent> | null;
  options: IModalOptions | undefined;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
  ) { }

  open<C>(component: Type<C>, options?: IModalOptions): void {
    this.openWithComponent(component);
    this.options = options as IModalOptions | undefined;
  }

  private openWithComponent(component: Type<unknown>) {
    // create the desired component, the content of the modal box
    const newComponent = createComponent(component, {
      environmentInjector: this.injector,
    });

    // create the modal component and project the instance of the desired component into ng-content
    this.newModalComponent = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[newComponent.location.nativeElement]],
    });

    document.body.appendChild(this.newModalComponent.location.nativeElement);

    // Attach views to the changeDetection cycle
    this.appRef.attachView(newComponent.hostView);
    this.appRef.attachView(this.newModalComponent.hostView);
  }

  close() {
    this.newModalComponent?.instance.close();
  }
}
