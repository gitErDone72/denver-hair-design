import { JsonPipe } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Stylist } from 'src/app/shared/stylist.model';
import { IModalStylistOptions } from '../modal-options.model';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  imports: [JsonPipe],
  host: { class: 'modal-stylist' }
})
export class ModalStylistComponent implements AfterContentInit {
  stylist!: Stylist; // will make this of Stylist type

  constructor(private modalService: ModalService) { }

  ngAfterContentInit(): void {
    this.stylist = (this.modalService.options as IModalStylistOptions).data as Stylist;
  }

  close(): void {
    this.modalService.close();
  }
}
