import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  integrantes = [
    {
      nombre: 'Valery Chumpitaz',
      rol: 'Líder de Proyecto',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      nombre: 'Juan Pérez',
      rol: 'Desarrollador Frontend',
      foto: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
      nombre: 'María López',
      rol: 'Diseñadora UI/UX',
      foto: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      nombre: 'Carlos Gómez',
      rol: 'Tester QA',
      foto: 'https://randomuser.me/api/portraits/men/52.jpg'
    }
  ];
}
