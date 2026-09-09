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
} from '@angular/core';
import { ProductM } from '../../../models/product';
import { Product } from '../../../products/components/product/product';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // readonly
  cart = input<ProductM[]>([]);
  removeProduct = output<ProductM>();

  // signals
  // localCart = signal<ProductM[]>([]);
  hideSide = signal<boolean>(true);
  Total = signal<number>(0);

  toggleSideStyle() {
    // cambiamos el estado del sidebar
    this.hideSide.update((state) => !state);
  }

  ngOnChanges(changes: SimpleChanges) {
    const calcCart = changes['cart'];
    if (calcCart) {
      this.Total.set(this.sumCartElements());
    }
  }

  sumCartElements() {
    return this.cart().reduce((total, item) => total + item.price, 0);
  }

  removeFromCart(product: ProductM) {
    this.removeProduct.emit(product);
  }
}
