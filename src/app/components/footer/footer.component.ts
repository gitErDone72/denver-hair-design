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

  openMap(): void {
    this.modalService.open(ModalMapComponent);
  }
}
