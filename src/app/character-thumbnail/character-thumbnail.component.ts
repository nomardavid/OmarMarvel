import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.sass']
})
export class CharacterThumbnailComponent implements OnInit {
  @Input() image;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

  getThumbnail() {
    return `${this.image.path}.${this.image.extension}`;
  }

}
