import { computed, Service, signal } from '@angular/core';
import { ProductM } from '../../models/product';

@Service()
export class Cart {
  public cart = signal<ProductM[]>([]);

  public total = computed(() => {
    const cart = this.cart();
    return cart.reduce((accu, value) => accu + value.price, 0);
  });

  addProduct(product: ProductM) {
    // busca si el producto ya fue ingresado
    const element = this.cart().find((value) => value.title === product.title);
    // si lo encuentra no lo agrega, pero si no lo encuentra lo agrega
    if (!element) {
      this.cart.update((state) => [...state, product]);
    }
  }

  removeProduct(product: ProductM) {
    this.cart.update((list) => {
      // hace un filtro, donde agrega todos los elementos que no sean iguales al producto a eliminar
      return list.filter((value) => value !== product);
    });
  }
}
