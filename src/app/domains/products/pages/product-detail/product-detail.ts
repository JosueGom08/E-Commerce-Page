import { Component, effect, inject, input, output, signal, SimpleChanges } from '@angular/core';
import { ProductM } from '../../../models/product';
import { ListProducts } from '../../../shared/service/list';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../../../shared/service/cart';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { id } from '../../../models/id';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  id = input<string>();
  // importante injectar ActivatedRoute para obtener el id de la ruta
  private route = inject(ActivatedRoute);
  private routeNav = inject(Router);
  private list = inject(ListProducts);
  private cartI = inject(Cart);

  // product = signal<ProductM>(this.list.currentProduct()!);
  product = signal<ProductM | null>(null);
  cart = signal(this.cartI.cart);

  ngOnInit() {
    this.changeProduct();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      this.changeProduct();
    }
  }

  changeProduct() {
    if (this.id()) {
      this.list.getOneProduct(this.id()!).subscribe({
        next: (product) => this.product.set(product),
        error: () => this.routeNav.navigate(['/']),
      });
    } else {
      this.routeNav.navigate(['/']);
    }
  }

  addProduct(product: ProductM) {
    this.cartI.addProduct(product);
  }
}
