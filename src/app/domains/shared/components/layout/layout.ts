import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';

@Component({
  imports: [RouterModule, Header],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
