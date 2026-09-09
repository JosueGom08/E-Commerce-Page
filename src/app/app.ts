import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />', // se puede incluir directamente que queremos renderizar, sin la necesidad de tener un archivo .html aparte
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('store');
}
