import { Component, signal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter';

@Component({
  imports: [Counter],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  duration = signal<number>(1000);
  message = signal<string>(`contador en ${this.duration()}`);

  // 1. Estado para controlar si el contador debe mostrarse o no
  showCounter = signal<boolean>(true);

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

  // 2. Método para destruir/ocultar el componente cuando avise que es negativo
  destroyCounter() {
    this.showCounter.set(false);
  }
}
