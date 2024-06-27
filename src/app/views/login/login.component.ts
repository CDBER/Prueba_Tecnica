import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {} // Inyectar Router

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.email, this.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          console.log('Inicio de sesión exitoso. Redirigiendo al home...');
          this.router.navigate(['/home']); // Redirigir al home
        } else {
          console.log('Credenciales incorrectas. No se pudo iniciar sesión.');
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
        this.loginError = true;
      }
    );
  }
}

/* import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.email, this.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          console.log('Inicio de sesión exitoso. Redirigiendo al home...');
          // Puedes redirigir al usuario al home aquí
        } else {
          console.log('Credenciales incorrectas. No se pudo iniciar sesión.');
          this.loginError = true;
        }
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
        this.loginError = true;
      }
    );
  }
}
 */
