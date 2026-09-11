import { inject, Service, Signal, signal, WritableSignal } from '@angular/core';
import { ProductM } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Service()
export class ListProducts {
  // almacenamos los valores iniciales en un servicio
  private http = inject(HttpClient);

  // currentProduct = signal<ProductM | undefined>(undefined);

  // setCurrentProduct(product: ProductM) {
  //   this.currentProduct.set(product!);
  // }

  // obtenemos todos los productos
  getProducts() {
    return this.http.get<ProductM[]>('https://api.escuelajs.co/api/v1/products');
  }

  // obtenemos un producto por su id
  getOneProduct(id: string) {
    return this.http.get<ProductM>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  // public list = signal<ProductM[]>([
  //   {
  //     id: 12,
  //     title: 'Titulo1',
  //     price: 200,
  //     description:
  //       'Hola esta es una descripcion 1fjdklsjfdkslfdksfdjskfldsjfkd lsjfdkslfjdskfl djskfdlsj kfdlsjfk dlsjfkd slfjdsklf jdkslfjds kfldjs kfldsjf kdlsjfkdslfj dkslfjdksfldsjfkdslfj kdslfjdskfjdskfldjs hola',
  //     images: ['https://picsum.photos/600/600?r=10'],
  //     creationAt: new Date().toISOString(),
  //   },
  //   {
  //     id: 12,
  //     title: 'Titulo2',
  //     price: 100,
  //     description: 'Hola esta es una descripcion 2',
  //     images: ['https://picsum.photos/600/600?r=11'],
  //     creationAt: new Date().toISOString(),
  //   },
  //   {
  //     id: 12,
  //     title: 'Titulo3',
  //     price: 200,
  //     description: 'Hola esta es una descripcion 3',
  //     images: ['https://picsum.photos/600/600?r=12'],
  //     creationAt: new Date().toISOString(),
  //   },
  //   {
  //     id: 12,
  //     title: 'Titulo4',
  //     price: 200,
  //     description: 'Hola esta es una descripcion 4',
  //     images: ['https://picsum.photos/600/600?r=13'],
  //     creationAt: new Date().toISOString(),
  //   },
  //   {
  //     id: 12,
  //     title: 'Titulo5',
  //     price: 200,
  //     description: 'Hola esta es una descripcion 5',
  //     images: ['https://picsum.photos/600/600?r=14'],
  //     creationAt: new Date().toISOString(),
  //   },
  // ]);
}
