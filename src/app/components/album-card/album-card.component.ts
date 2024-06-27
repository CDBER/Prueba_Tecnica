import { CommonModule } from '@angular/common';
import { Song, SongListService } from './service/song-list.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AlbumCardComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongListService) {}

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe(
      (songs: Song[]) => {
        this.songs = songs;
      },
      (error) => {
        console.error('Error fetching songs:', error);
      }
    );
  }
}
