import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './app.constants';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) {
  }

  load() : Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + '/videos').pipe(
       map(videos => {
        return videos
          .filter(video => video.title.startsWith("Angular"))
          .map(video => {
            // ...object => shallow copy
            return {...video, title: video.title.toUpperCase()};
          })
      })
    );
  }
}
