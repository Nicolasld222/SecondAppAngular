import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-cart',
  imports: [Nav, Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

}
