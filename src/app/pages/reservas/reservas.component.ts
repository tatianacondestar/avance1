import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent {
  reservaForm: FormGroup;
  reservas: any[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      servicio: ['', Validators.required],
      fecha: ['', [Validators.required, this.validarFecha]],
      hora: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      personas: [1, [Validators.required, Validators.min(1)]],
    });
  }

  get f() {
    return this.reservaForm.controls;
  }

  validarFecha(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const [year, month, day] = control.value.split('-').map((v: string) => +v);
    const fechaSeleccionada = new Date(year, month - 1, day);
    fechaSeleccionada.setHours(0, 0, 0, 0);
    return fechaSeleccionada < hoy ? { fechaInvalida: true } : null;
  }

  onSubmit() {
    if (this.reservaForm.invalid) {
      this.reservaForm.markAllAsTouched();
      return;
    }

    if (this.editIndex !== null) {
      // Editar reserva existente
      this.reservas[this.editIndex] = this.reservaForm.value;
      this.editIndex = null;
      alert('✏️ Reserva actualizada correctamente');
    } else {
      // Crear nueva reserva
      this.reservas.push(this.reservaForm.value);
      alert('✅ Reserva guardada correctamente');
    }

    this.reservaForm.reset();
  }

  eliminarReserva(index: number) {
    if (confirm('¿Seguro que desea eliminar esta reserva?')) {
      this.reservas.splice(index, 1);
    }
  }

  editarReserva(index: number) {
    const reserva = this.reservas[index];
    this.reservaForm.patchValue(reserva);
    this.editIndex = index;
  }

  verReserva(index: number) {
    const r = this.reservas[index];
    alert(
      `📋 Detalles de la reserva:\n\n` +
      `👤 Nombre: ${r.nombre}\n🧾 Servicio: ${r.servicio}\n📅 Fecha: ${r.fecha}\n🕒 Hora: ${r.hora}\n📞 Teléfono: ${r.telefono}\n👥 Personas: ${r.personas}`
    );
  }
}
