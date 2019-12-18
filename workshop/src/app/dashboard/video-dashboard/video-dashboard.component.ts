import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  selected: Video;
  videos: Observable<Video[]>;

  constructor(private vds: VideoDataService) {
  }

  ngOnInit() {
    this.videos = this.vds.load().pipe(
      tap(videos => this.selected = videos[0])
    );
  }

}
