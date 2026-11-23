import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  imports: [],
  templateUrl: './monster-card.html',
  styleUrl: './monster-card.css',
})
export class MonsterCardComponent {
  @Input() imagen = '';
  @Input() titulo = 'Monstruo sin nombre';
  @Input() texto = '';
  @Input() textoBoton = 'Ver más';
  @Output() botonPulsado = new EventEmitter<string>();

  pulsar(): void {
    this.botonPulsado.emit(this.titulo);
  }
}