import { Component, OnInit } from '@angular/core';
import {
  PlayListService,
  PlayList,
  PlayListForm,
} from '../../views/home/services/play-list.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-play-list-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-play-list-form.component.html',
  styleUrl: './add-play-list-form.component.css',
})
export class AddPlaylistFormComponent implements OnInit {
  /*  newPlaylist: PlayList = { id: 0, title: '', description: '' }; */
  playlistForm = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
  });

  showModal: boolean = true; // Variable para controlar la visibilidad de la modal

  constructor(private playListService: PlayListService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.playlistForm.value);

    /*  const value: PlayListForm = this.playlistForm.value; */

    this.playListService.addPlaylist(this.playlistForm.value).subscribe(() => {
      console.log('Playlist added successfully');
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    console.log('Closing modal');
    this.showModal = false;
  }
}
