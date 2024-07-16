import { AfterContentInit, AfterViewInit, Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { IModalStylistOptions } from '../modal-options.model';
// import { Stylist } from 'src/app/shared/stylist.model';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  host: { class: 'modal-stylist' }
})
export class ModalStylistComponent implements AfterContentInit {
  data!: string; // will make this of Stylist type

  constructor(private modalService: ModalService) { }

  ngAfterContentInit(): void {
    this.data = (this.modalService.options as IModalStylistOptions).data;
  }

  close(): void {
    this.modalService.close();
  }
}
