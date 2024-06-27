import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { PlayList, PlayListService } from './service/play-list.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SlidebarComponent } from '../../components/slidebar/slidebar.component';

@Component({
  selector: 'app-play-list',
  standalone: true,
  imports: [NavbarComponent, SlidebarComponent, CommonModule],
  templateUrl: './play-list.component.html',
  styleUrl: './play-list.component.css',
})
export class PlayListComponent implements OnInit {
  playListService: PlayListService = inject(PlayListService);
  playlists: PlayList[] = [];

  constructor() {}

  ngOnInit() {
    console.log('En este instante el componente ha cargado');
    this.playListService.getAll().subscribe((data) => {
      this.playlists = data;
      console.log(data);
    });
  }

  // Método para agregar una nueva playlist
  addPlaylist() {
    const newPlaylistName = `Playlist${this.playlists.length + 1}`; // Nombre automático para la nueva playlist
    const newPlaylist = { name: newPlaylistName };
    /* this.playlists.push(newPlaylist); */
  }

  // Métodos para editar, reproducir y eliminar playlists
  editPlaylist(playlist: any) {
    console.log('Editar playlist:', playlist);
    // Aquí podrías implementar la lógica para editar la playlist
  }

  playPlaylist(playlist: any) {
    console.log('Reproducir playlist:', playlist);
    // Aquí podrías implementar la lógica para reproducir la playlist
  }

  deletePlaylist(playlist: any) {
    console.log('Eliminar playlist:', playlist);
    /*  const index = this.playlists.indexOf(playlist);
    if (index !== -1) {
      this.playlists.splice(index, 1);
    } */
  }
}
