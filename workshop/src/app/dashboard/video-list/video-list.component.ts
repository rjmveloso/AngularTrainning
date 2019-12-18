import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Input() selected: Video;
  @Output() play = new EventEmitter<Video>();

  //readonly is for properties in a class
  //readonly videos: Video[];
  //videos: Video[];

  constructor() {
  }

  ngOnInit() {
  }

  toggle(video: Video) {
    this.play.emit(video);
  }
  
  // or assign directly on html
//  onPlay($event) {
//    this.video = $event;
//}
}
