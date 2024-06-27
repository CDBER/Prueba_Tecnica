import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../views/login/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    console.log('Cerrando sesión...');
    this.authService.logout();
    console.log('Sesión cerrada. Redirigiendo a /login');
    this.router.navigate(['/Login']);
  }
}
