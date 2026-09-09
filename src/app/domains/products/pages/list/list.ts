import { Component, signal } from '@angular/core';
import { Product } from '../../components/product/product';
import { ProductM } from '../../../models/product';
import { Header } from '../../../shared/components/header/header';

@Component({
  imports: [Product, Header],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  list = signal<ProductM[]>([
    {
      name: 'Titulo1',
      price: 200,
      description: 'Hola esta es una descripcion 1',
      image: 'https://picsum.photos/600/600?r=10',
      creationAt: new Date().toISOString(),
    },
    {
      name: 'Titulo2',
      price: 100,
      description: 'Hola esta es una descripcion 2',
      image: 'https://picsum.photos/600/600?r=11',
      creationAt: new Date().toISOString(),
    },
    {
      name: 'Titulo3',
      price: 200,
      description: 'Hola esta es una descripcion 3',
      image: 'https://picsum.photos/600/600?r=12',
      creationAt: new Date().toISOString(),
    },
    {
      name: 'Titulo4',
      price: 200,
      description: 'Hola esta es una descripcion 4',
      image: 'https://picsum.photos/600/600?r=13',
      creationAt: new Date().toISOString(),
    },
    {
      name: 'Titulo5',
      price: 200,
      description: 'Hola esta es una descripcion 5',
      image: 'https://picsum.photos/600/600?r=14',
      creationAt: new Date().toISOString(),
    },
  ]);

  cart = signal<ProductM[]>([]);

  addElement(product: ProductM) {
    // agregamos el producto al carrito
    // this.cart.update((state) => [...state, product]);
    // busca si el elemento ya fue ingresado
    const element = this.cart().find((value) => value.name === product.name);
    // si lo encuentra no lo agrega, pero si no lo encuentra lo agrega
    if (!element) {
      this.cart.update((state) => [...state, product]);
    }
  }

  removeProduct(product: ProductM) {
    this.cart.update((list) => {
      return list.filter((value) => value !== product);
    });
  }
}
