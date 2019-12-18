import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  @Input() video?: string;
  //video: string;

  url: SafeUrl;

  constructor(private sanitizer: DomSanitizer, route: ActivatedRoute) {
    //this.video = without tap this assignment needs to be to an Observable
    route.queryParamMap.pipe(
      map(params => params.get('video')),
      //tap(video => this.video = video)
    );
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let source = 'https://www.youtube.com/embed/' + this.video;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(source);
  }
}
