import { Component, OnInit } from '@angular/core';
import { PlayList, PlayListService } from './services/play-list.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { SlidebarComponent } from '../../components/slidebar/slidebar.component';
import { CommonModule } from '@angular/common';
import { AddPlaylistFormComponent } from '../../components/add-play-list-form/add-play-list-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    AlbumCardComponent,
    SlidebarComponent,
    CommonModule,
    AddPlaylistFormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  playlists: PlayList[] = [];

  constructor(private playListService: PlayListService) {}

  ngOnInit() {
    console.log('El componente Home se ha cargado');
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.playListService.getAll().subscribe((data) => {
      this.playlists = data;
      console.log('Playlists cargadas:', data);
    });
  }

  deletePlaylist(id: string) {
    this.playListService.deletePlaylist(id).subscribe(() => {
      console.log('Playlist eliminada con éxito');
      this.loadPlaylists(); // Actualizar la lista después de eliminar
    });
  }
}
