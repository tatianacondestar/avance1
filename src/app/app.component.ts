import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservasComponent } from './pages/reservas/reservas.component'; // 👈 importar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    ReservasComponent // 👈 agregado
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vg-fe-sistema-empresarial';

  constructor(private router: Router) {}

  // ✅ Muestra el formulario solo si la ruta actual es /reservas
  isReservasPage(): boolean {
    return this.router.url === '/reservas';
  }
}
