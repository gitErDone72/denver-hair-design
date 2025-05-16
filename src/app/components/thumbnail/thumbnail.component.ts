import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { IThumbnailItem } from './thumbnail.model';

@Component({
  standalone: true,
  selector: 'dhd-thumbnail',
  templateUrl: './thumbnail.component.html',
  host: { class: 'thumbnail' },
  imports: [CommonModule, NgOptimizedImage]
})
export class ThumbnailComponent implements OnInit {
  isClickable = input<boolean>(true);
  thumbnailItem = input.required<IThumbnailItem>();
  thumbnailClicked = output<MouseEvent>();
  image!: string;
  intrinsicThumbnailWidth = 600;
  intrinsicThumbnailHeight = 800;

  constructor() { }

  ngOnInit(): void {
    this.image = `../../assets/img/thumbs/${this.thumbnailItem().type}/${this.thumbnailItem().image}.jpg`
  }
  onThumbnailClicked(event: MouseEvent): void {
    if (this.isClickable()) {
      this.thumbnailClicked.emit(event);
    }
  }
}
