import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ModalMapComponent } from '../modal/modal-map/modal-map.component';

@Component({
  selector: 'dhd-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  host: { class: 'footer' },
})
export class FooterComponent {
  constructor(private modalService: ModalService) { }

  /**
   * Opens a modal containing a map component.
   * Utilizes the modal service to display the `ModalMapComponent`.
   *
   * @remarks
   * This method is typically used to provide users with a visual map interface.
   *
   * @returns {void} This method does not return a value.
   */
  openMap(): void {
    this.modalService.open(ModalMapComponent);
  }
}
