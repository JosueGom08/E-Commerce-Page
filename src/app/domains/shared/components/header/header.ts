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
import { Product } from '../../../products/components/product/product';
import { Cart } from '../../service/cart';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // el servicio
  private ProductService = inject(Cart);

  // señales
  cart = this.ProductService.cart;
  Total = this.ProductService.total;
  hideSide = signal<boolean>(true);

  toggleSideStyle() {
    // cambiamos el estado del sidebar
    this.hideSide.update((state) => !state);
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
