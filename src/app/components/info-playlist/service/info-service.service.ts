import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PlayList {
  id: string;
  title: string;
  description: string;
  songs: Song[]; // Arreglo de canciones que pertenecen a esta lista de reproducción
}

export interface Song {
  id: string;
  title: string;
  artist: string;
}

@Injectable({
  providedIn: 'root',
})
export class InfoServiceService {
  private playListSongsUrl: string =
    'http://localhost:3000/playlists?include=songs';

  constructor(private http: HttpClient) {}

  getAllPlaylists(): Observable<PlayList[]> {
    return this.http.get<PlayList[]>(this.playListSongsUrl);
  }

  // Otros métodos del servicio según sea necesario
}
