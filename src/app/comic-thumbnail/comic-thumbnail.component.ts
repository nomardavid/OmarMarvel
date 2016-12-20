import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-thumbnail',
  templateUrl: './comic-thumbnail.component.html',
  styleUrls: ['./comic-thumbnail.component.sass']
})
export class ComicThumbnailComponent implements OnInit {

  @Input() image;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

  getThumbnail() {
    return `${this.image.path}.${this.image.extension}`;
  }


}
