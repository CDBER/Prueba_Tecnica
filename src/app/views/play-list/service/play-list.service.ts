import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PlayList {
  title: string;
  artist: string;
  album: string;
  release_year: string;
  duration_seconds: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayListService {
  private playListUrl: string = 'http://localhost:3000/playlist';
  constructor(private http: HttpClient) {}

  getAll(): Observable<PlayList[]> {
    return this.http.get<PlayList[]>(this.playListUrl);
  }
}
