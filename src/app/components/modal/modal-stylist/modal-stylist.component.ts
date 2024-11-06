import { CommonModule, JsonPipe } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { IStylist } from 'src/app/shared/stylist.model';
import { ThumbnailComponent } from '../../thumbnail/thumbnail.component';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  host: { class: 'modal-stylist' },
  imports: [JsonPipe, ThumbnailComponent, CommonModule],
})
export class ModalStylistComponent implements AfterContentInit {
  stylist!: IStylist; // will make this of Stylist type

  constructor(private modalService: ModalService) { }

  ngAfterContentInit(): void {
    this.stylist = structuredClone(this.modalService.options?.data) as IStylist;
    this.stylist.thumbnailInfo.hasDetails = false;
  }

  close(): void {
    this.modalService.close();
  }
}
