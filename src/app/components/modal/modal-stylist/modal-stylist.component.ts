import { AfterContentInit, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { BookingMethodType, IStylist } from 'src/app/shared/stylistItem.model';
import { ThumbnailComponent } from '../../thumbnail/thumbnail.component';
import { IThumbnailItem } from '../../thumbnail/thumbnail.model';
import { BookingButtonComponent } from '../../booking-button/booking-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dhd-modal-stylist',
  standalone: true,
  templateUrl: './modal-stylist.component.html',
  host: { class: 'modal-stylist' },
  imports: [ThumbnailComponent, BookingButtonComponent, CommonModule],
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
    this.stylist = this.modalService.options?.data as IStylist;
  }
}

