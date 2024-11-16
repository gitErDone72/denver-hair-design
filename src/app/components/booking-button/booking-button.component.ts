import { Component, input, OnInit } from '@angular/core';
import { BookingMethodType, IStylist } from 'src/app/shared/stylistItem.model';

@Component({
  selector: 'dhd-booking-button',
  standalone: true,
  templateUrl: './booking-button.component.html',
  host: { class: 'booking-button' }
})
export class BookingButtonComponent implements OnInit {
  bookingMethodType = BookingMethodType;
  stylist = input.required<IStylist>();
  bookingIcon!: string;
  bookingLink?: string;

  ngOnInit(): void {
    if(this.stylist().bookingMethod === BookingMethodType.PHONE) {
      this.bookingLink = `sms:+1${this.stylist().bookingPhone}?body=Hi ${this.stylist().nameFirst}. I found you at denverhairdesign.com and would like to book an appointment with you.`;
      this.bookingIcon = 'icon-sms';
    } else {
      this.bookingLink = this.stylist().bookingLink;
      this.bookingIcon = `icon-${this.stylist().bookingMethod}`;
    }
  }
}
