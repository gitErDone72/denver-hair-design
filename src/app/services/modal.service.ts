import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentRef, EmbeddedViewRef, EnvironmentInjector, Inject, Injectable, TemplateRef, Type, ViewContainerRef, createComponent } from '@angular/core';
import { IModalOptions } from '../components/modal/modal-options.model';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  newModalComponent!: ComponentRef<ModalComponent> | null;
  options!: IModalOptions | undefined;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
  ) { }

  open(
    vcrOrComponent: ViewContainerRef,
    content: TemplateRef<Element>,
    options?: IModalOptions): void;

  open<C>(vcrOrComponent: ViewContainerRef | Type<C>, options?: IModalOptions): void;

  open<C>(vcrOrComponent: ViewContainerRef | Type<C>, param2?: TemplateRef<Element> | IModalOptions, options?: IModalOptions): void {
    if (vcrOrComponent instanceof ViewContainerRef) {
      this.openWithTemplate(vcrOrComponent, param2 as TemplateRef<Element>);
      this.options = options;
    } else {
      this.openWithComponent(vcrOrComponent);
      this.options = param2 as IModalOptions | undefined;
    }
  }

  private openWithTemplate(vcr: ViewContainerRef, content: TemplateRef<Element>) {
    vcr.clear();
    const innerContent = vcr.createEmbeddedView(content);

    this.newModalComponent = vcr.createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [innerContent.rootNodes],

    });
  }

  //   {
  //   const componentRef = this.appRef.bootstrap(ModalComponent);
  //   this.newModalComponent = componentRef;

  //   const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  //   this.document.body.appendChild(domElem);

  //   componentRef.instance.childComponent = component;
  //   componentRef.instance.data = data;
  //   componentRef.instance.closeModal.subscribe(() => this.close());
  // }

  // close() {
  //   if (this.newModalComponent) {
  //     this.appRef.detachView(this.newModalComponent.hostView);
  //     this.newModalComponent.destroy();
  //     this.newModalComponent = null;
  //   }
  // }

  // private openWithComponent(component: Type<unknown>) {
  //   const newComponent = createComponent(component, {
  //     environmentInjector: this.injector
  //   });
  // }


  private openWithComponent(component: Type<unknown>) {
    // create the desired component, the content of the modal box
    const newComponent = createComponent(component, {
      environmentInjector: this.injector,
    });
    // create the modal component and project the instance of the desired component in the ng-content
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
