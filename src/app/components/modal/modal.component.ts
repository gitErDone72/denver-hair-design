import {
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  Component,
} from '@angular/core';
import { Observable, fromEvent, zip } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { IModalOptions } from './modal-options.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dhd-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  host: { class: 'modal' },
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalContent') modalContent!: ElementRef<HTMLDivElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;
  @HostListener('document:keydown.escape')
  onEscape() {
    this.modalService.close();
  }
  options!: IModalOptions | undefined;
  modalAnimationEnd$!: Observable<Event>;
  modalLeaveAnimation!: string;
  overlayLeaveAnimation!: string;
  overlayAnimationEnd$!: Observable<Event>;
  modalLeaveTiming!: number;
  overlayLeaveTiming!: number;

  constructor(
    private modalService: ModalService,
    private element: ElementRef
  ) {}

  onClose() {
    // closing modal when clicking on the overlay
    this.modalService.close();
  }

  ngAfterViewInit() {
    this.options = this.modalService.options;
    this.addOptions();
    this.addEnterAnimations();
  }

  addEnterAnimations() {
    this.modalContent.nativeElement.style.animation =
      this.options?.animations?.modal?.enter || '';
    this.overlay.nativeElement.style.animation =
      this.options?.animations?.overlay?.enter || '';
  }

  addOptions() {
    this.modalContent.nativeElement.style.minWidth =
      this.options?.size?.minWidth || 'auto';
    this.modalContent.nativeElement.style.width =
      this.options?.size?.width || 'auto';
    this.modalContent.nativeElement.style.maxWidth =
      this.options?.size?.maxWidth || 'auto';
    this.modalContent.nativeElement.style.minHeight =
      this.options?.size?.minHeight || 'auto';
    this.modalContent.nativeElement.style.height =
      this.options?.size?.height || 'auto';
    this.modalContent.nativeElement.style.maxHeight =
      this.options?.size?.maxHeight || 'auto';

    // Storing ending animation in variables
    this.modalLeaveAnimation = this.options?.animations?.modal?.leave || '';
    this.overlayLeaveAnimation = this.options?.animations?.overlay?.leave || '';
    // Adding an animationend event listener to know when animations ends
    this.modalAnimationEnd$ = this.animationendEvent(
      this.modalContent.nativeElement
    );
    this.overlayAnimationEnd$ = this.animationendEvent(
      this.overlay.nativeElement
    );
    // Get to know how long animations are
    this.modalLeaveTiming = this.getAnimationTime(this.modalLeaveAnimation);
    this.overlayLeaveTiming = this.getAnimationTime(this.overlayLeaveAnimation);
  }

  animationendEvent(element: HTMLDivElement) {
    return fromEvent(element, 'animationend');
  }

  removeElementIfNoAnimation(element: HTMLDivElement, animation: string) {
    if (!animation) {
      element.remove();
    }
  }

  close() {
    this.modalContent.nativeElement.style.animation = this.modalLeaveAnimation;
    this.overlay.nativeElement.style.animation = this.overlayLeaveAnimation;

    // Goal here is to clean up the DOM to not keep unnecessary <app-modal> element
    // No animations on both elements:
    if (
      !this.options?.animations?.modal?.leave &&
      !this.options?.animations?.overlay?.leave
    ) {
      this.modalService.options = undefined;
      this.element.nativeElement.remove();
      return;
    }

    // Remove element if not animated
    this.removeElementIfNoAnimation(
      this.modalContent.nativeElement,
      this.modalLeaveAnimation
    );
    this.removeElementIfNoAnimation(
      this.overlay.nativeElement,
      this.overlayLeaveAnimation
    );

    // Both elements are animated, remove modal as soon as longest one ends
    if (this.modalLeaveTiming > this.overlayLeaveTiming) {
      this.modalAnimationEnd$.subscribe(() => {
        this.element.nativeElement.remove();
      });
    } else if (this.modalLeaveTiming < this.overlayLeaveTiming) {
      this.overlayAnimationEnd$.subscribe(() => {
        this.element.nativeElement.remove();
      });
    } else {
      zip(this.modalAnimationEnd$, this.overlayAnimationEnd$).subscribe(() => {
        this.element.nativeElement.remove();
      });
    }

    this.modalService.options = undefined;
  }

  getAnimationTime(animation: string) {
    // Example animation = 'fade-in 0.8s'
    let animationTime = 0;
    const splittedAnimation = animation.split(' ');
    for (const expression of splittedAnimation) {
      const currentValue = +expression.replace(/s$/, '');
      if (!isNaN(currentValue)) {
        animationTime = currentValue;
        break;
      }
    }

    return animationTime;
  }
}
