import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { IModalOptions } from '../modal/modal-options.model';
import { ModalMapComponent } from '../modal/modal-map/modal-map.component';

@Component({
  selector: 'dhd-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  host: { class: 'footer' },
})
export class FooterComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openMap() {
    this.modalService.open(ModalMapComponent, {
      data: 'Just a string for now...',
    } as IModalOptions);
  }
}
