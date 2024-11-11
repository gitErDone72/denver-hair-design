import { AfterContentInit, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { BookingMethodType, IStylist } from 'src/app/shared/stylistItem.model';
import { ThumbnailComponent } from '../../thumbnail/thumbnail.component';
import { IGalleryItem } from 'src/app/shared/galleryItem.model';
import { IThumbnailItem } from '../../thumbnail/thumbnail.model';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  host: { class: 'modal-stylist' },
  imports: [ThumbnailComponent],
})
export class ModalStylistComponent implements AfterContentInit {
  bookingMethodType = BookingMethodType;
  stylist!: IStylist;
  galleryItems: IThumbnailItem[] = [];

  constructor(private modalService: ModalService) { }

  close(): void {
    this.modalService.close();
  }

  ngAfterContentInit(): void {
    this.stylist = structuredClone(this.modalService.options?.data) as IStylist;
  }
}

