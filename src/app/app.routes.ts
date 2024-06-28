import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { PlayListComponent } from './views/play-list/play-list.component';
import { InfoPlaylistComponent } from './components/info-playlist/info-playlist.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Asegúrate de que el path sea 'login' en minúsculas
  { path: 'my-playlist', component: PlayListComponent },
  { path: 'app-info-playlist/:id', component: InfoPlaylistComponent }, // Asegúrate de que la ruta tenga ':id'

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireccionar a login si la ruta es vacía
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Redireccionar a login para rutas no encontradas
];
