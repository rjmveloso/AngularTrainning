import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent {

  @Input() video: Video | undefined;

  constructor() { }

}
