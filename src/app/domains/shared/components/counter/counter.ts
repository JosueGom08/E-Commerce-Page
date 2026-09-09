import {
  Component,
  input,
  output,
  SimpleChanges,
  signal,
  PLATFORM_ID,
  inject,
  OnInit,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter implements OnInit, OnDestroy, OnChanges {
  duration = input.required<number>();
  message = input.required<string>();

  // Evento para avisar al padre que debe destruir este componente
  destroySelf = output<void>();

  platformId = inject(PLATFORM_ID);
  counter = signal<number>(0);
  counterRef: any;

  ngOnInit() {
    this.startCounter();
  }

  ngOnChanges(changes: SimpleChanges) {
    const durationChanges = changes['duration'];
    if (durationChanges) {
      // Si el valor recibido es negativo, se notifica al padre inmediatamente
      if (durationChanges.currentValue < 0) {
        this.destroySelf.emit();
      }
    }
  }

  startCounter() {
    if (isPlatformBrowser(this.platformId)) {
      this.counterRef = setInterval(() => {
        console.log('corriendo');
        this.counter.update((value) => value + 1);
      }, 1000);
    }
  }

  stopCounter() {
    if (this.counterRef) {
      clearInterval(this.counterRef);
      console.log('Contador detenido con éxito');
    }
  }

  ngOnDestroy() {
    console.log('Componente destruido');
    this.stopCounter(); // Garantiza limpiar el timer al destruirse
  }
}
