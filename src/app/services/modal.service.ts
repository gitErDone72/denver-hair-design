// From https://medium.com/@greenFlag/how-to-easily-and-quickly-create-a-modal-in-angular-a2f82d5c11f6

import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent,
} from '@angular/core';
import { IModalOptions } from '../components/modal/modal-options.model';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalParentComponent!: ComponentRef<ModalComponent> | null;
  options: IModalOptions | undefined;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  open<C>(component: Type<C>, options?: IModalOptions): void {
    this.options = options as IModalOptions | undefined;
    if (this.options) {
      this.options.animations = {
        modal: {
          enter: 'fade-in 0.3s ease-out',
          leave: 'fade-out 0.3s forwards',
        },
        overlay: {
          enter: 'fade-in 1s',
          leave: 'fade-out 1s forwards',
        },
      };
      this.options.size = {
        ...options?.size,
        height:
          window.innerWidth > 600
            ? 'auto'
            : 'calc(100dvh - var(--spacing-main) * 2)',
        width:
          window.innerWidth > 600
            ? 'auto'
            : 'calc(100vw - var(--spacing-main) * 2)',
      };
    }

    const dynamicModalContent = createComponent(component, {
      environmentInjector: this.injector,
    });

    // create the modal component and project the instance of the desired component into ng-content
    this.modalParentComponent = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[dynamicModalContent.location.nativeElement]],
    });

    document.body.appendChild(this.modalParentComponent.location.nativeElement);

    // Attach views to the changeDetection cycle
    this.appRef.attachView(dynamicModalContent.hostView);
    this.appRef.attachView(this.modalParentComponent.hostView);
  }

  close() {
    this.modalParentComponent?.instance.close();
  }
}
