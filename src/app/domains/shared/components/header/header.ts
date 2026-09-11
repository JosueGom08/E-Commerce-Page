import {
  Component,
  computed,
  effect,
  input,
  output,
  InputSignal,
  Signal,
  signal,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ProductM } from '../../../models/product';
import { Cart } from '../../service/cart';
import { RouterLinkWithHref, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [RouterLinkWithHref, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // el servicio
  private ProductService = inject(Cart);
  private router = inject(Router);

  // señales
  cart = this.ProductService.cart;
  Total = this.ProductService.total;
  hideSide = signal<boolean>(true);
  selected = signal<'Home' | 'About' | 'Services'>('Home');

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.urlAfterRedirects === '/about') this.selected.set('About');
        else if (event.urlAfterRedirects === '/services') this.selected.set('Services');
        else this.selected.set('Home');
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  toggleSideStyle() {
    // cambiamos el estado del sidebar
    this.hideSide.update((state) => !state);
  }

  hideSideStyle() {
    this.hideSide.set(true);
  }

  removeFromCart(product: ProductM) {
    // Funcion que se puede encontrar el el servicio del carrito
    this.ProductService.removeProduct(product);
  }

  // readonly
  // cart = input<ProductM[]>([]);
  // removeProduct = output<ProductM>();

  // signals
  // localCart = signal<ProductM[]>([]);

  // ngOnChanges(changes: SimpleChanges) {
  //   const calcCart = changes['cart'];
  //   if (calcCart) {
  //     this.Total.set(this.sumCartElements());
  //   }
  // }

  //   removeFromCart(product: ProductM) {
  //     this.removeProduct.emit(product);
  //   }
}
