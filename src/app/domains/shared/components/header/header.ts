import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  hideSide = signal<boolean>(false);

  toggleSideStyle() {
    // cambiamos el estado del sidebar
    this.hideSide.update((state) => !state);
  }
}
