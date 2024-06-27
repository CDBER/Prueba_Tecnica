/* import { PlayList } from './../../play-list/service/play-list.service'; */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface PlayList {
  id: string;
  title: string;
  description: string;
}

export interface PlayListForm {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayListService {
  private playListUrl: string = 'http://localhost:3000/playlists';
  constructor(private http: HttpClient) {}

  getAll(): Observable<PlayList[]> {
    return this.http.get<PlayList[]>(this.playListUrl);
  }

  addPlaylist(newPlaylist: any): Observable<any> {
    return this.http.post(this.playListUrl, newPlaylist);
  }

  deletePlaylist(id: string): Observable<any> {
    const deleteUrl = `${this.playListUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }
}
