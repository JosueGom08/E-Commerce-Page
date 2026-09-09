import { Component, input, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductM } from '../../../models/product';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-product', // este sera el nombre del componente externo, no se puede cambiar <app-product /> esa es la forma en como lo podemos agregar
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {
  // es una forma de poder obtener valor afuera del producto
  //  <app-product img="https://picsum.photos/600/600?r=10" [title]="'titulo1'" [price]="200"/>
  // sintaxis actual (funcional despues de Angular 17.1+)
  // img = input<string>('');
  // title = input<string>('');
  // price = input<number>(0);
  // description = input<string>('');

  product = input<ProductM>();
  addProductCart = output<ProductM>();

  addProduct() {
    this.addProductCart.emit(this.product()!);
  }
  // es para poder agregar funciones al componente y que podamos obtener valores desde alli
  // printTitle = output<string>();
  // greedHandler() {
  //   // imprime el titulo
  //   alert(`Este es el titulo del libro ${this.product()?.name}`);
  //   // this.printTitle.emit('saludo');
  // }

  // sintaxis antigua, ya no es soportada
  // @input({required:true}) img: string = '';
  // @input() title: string = '';
  // @input() price: number = 0;
  //img = 'https://picsum.photos/600/600?r=' + Math.random();
}
