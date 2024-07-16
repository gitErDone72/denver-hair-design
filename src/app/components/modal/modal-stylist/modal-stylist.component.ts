import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
// import { Stylist } from 'src/app/shared/stylist.model';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  host: { class: 'modal-stylist' }
})
export class ModalStylistComponent {
  @Input() data: any; // will make this of Stylist type

  constructor(private modalService: ModalService) { }

  close(): void {
    this.modalService.close();
  }
}
