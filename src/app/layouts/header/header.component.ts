import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  abrirReservas() {
    // 👇 Navega a la sección de reservas sin recargar toda la página
    this.router.navigateByUrl('/reservas');
  }
}
