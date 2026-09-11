import { Component, inject, signal } from '@angular/core';
import { Product } from '../../components/product/product';
import { ProductM } from '../../../models/product';
import { ListProducts } from '../../../shared/service/list';

@Component({
  imports: [Product],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  // Servicios
  private ListProducts = inject(ListProducts);

  // Señales
  // señal de la lista general
  list = signal<ProductM[]>([]);

  ngOnInit() {
    this.ListProducts.getProducts().subscribe({
      next: (products) => {
        this.list.set(products);
      },
      error: () => {
        undefined;
      },
    });
  }
}
