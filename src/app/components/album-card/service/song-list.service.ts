import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Song {
  id: string;
  title: string;
  artist: string;
}
@Injectable({
  providedIn: 'root',
})
export class SongListService {
  private songsUrl: string = 'http://localhost:3000/songs';

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl);
  }
}
