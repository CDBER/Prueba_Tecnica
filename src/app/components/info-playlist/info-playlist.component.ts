import { Component, OnInit } from '@angular/core';
/* import { PlayList } from '../../views/home/services/play-list.service'; // Asegúrate de importar la interfaz PlayList adecuada */
import { InfoServiceService } from './service/info-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { CommonModule } from '@angular/common';
import { Song } from './service/info-service.service';
import { PlayList } from './service/info-service.service';

@Component({
  selector: 'app-info-playlist',
  templateUrl: './info-playlist.component.html',
  styleUrls: ['./info-playlist.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    AlbumCardComponent,
    SlidebarComponent,
    CommonModule,
  ],
})
export class InfoPlaylistComponent implements OnInit {
  playlist: PlayList | undefined;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoServiceService // Usa InfoServiceService en lugar de PlayListService
  ) {
    console.log('Usando InfoServiceService');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPlaylist(id);
    }
  }

  loadPlaylist(id: string) {
    this.infoService.getAllPlaylists().subscribe((data) => {
      const playlistWithSongs = data.find((playlist) => playlist.id === id);
      if (playlistWithSongs) {
        this.playlist = playlistWithSongs;
        console.log('Playlist con canciones cargada:', this.playlist);
      } else {
        console.error('Playlist no encontrada');
      }
    });
  }
}

/* import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { CommonModule } from '@angular/common';
import {
  PlayList,
  PlayListService,
} from '../../views/home/services/play-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-playlist',
  standalone: true,
  imports: [
    NavbarComponent,
    AlbumCardComponent,
    SlidebarComponent,
    CommonModule,
  ],
  templateUrl: './info-playlist.component.html',
  styleUrl: './info-playlist.component.css',
})
export class InfoPlaylistComponent implements OnInit {
  playlist: PlayList | undefined;
  infoService: any;

  constructor(
    private route: ActivatedRoute,
    private playListService: PlayListService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPlaylist(id);
    }
  }

  loadPlaylist(id: string) {
    this.infoService.getAllPlaylists().subscribe((data: any[]) => {
      const playlistWithSongs = data.find(
        (playlist: { id: string }) => playlist.id === id
      );
      if (playlistWithSongs) {
        this.playlist = playlistWithSongs;
        console.log('Playlist con canciones cargada:', this.playlist);
      } else {
        console.error('Playlist no encontrada');
      }
    });
  } */

/*  loadPlaylist(id: string) {
    this.playListService.getPlaylistById(id).subscribe((data) => {
      this.playlist = data;
      console.log('Playlist cargada:', data);
    });
  } 
    }*/
