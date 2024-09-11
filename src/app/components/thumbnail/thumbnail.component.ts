import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SiteSections as SiteSection } from 'src/app/shared/site-sections.enum';

@Component({
  standalone: true,
  selector: 'dhd-thumbnail',
  templateUrl: './thumbnail.component.html',
  host: { class: 'thumbnail' },
  imports: [CommonModule]
})
export class ThumbnailComponent implements OnInit {

  @Input() type: SiteSection = SiteSection.STYLISTS;
  @Input() image: string | undefined;
  @Input() isImageClickable: boolean = false;
  @Input() hasDetails: boolean = true;
  @Output() thumbnailClicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
    this.image = `../../assets/img/thumbs/${this.type.toLowerCase()}/${this.image}.jpg`
  }
  onThumbnailClicked(event: MouseEvent): void {
    if (this.isImageClickable) {
      this.thumbnailClicked.emit(event);
    }
  }
}
