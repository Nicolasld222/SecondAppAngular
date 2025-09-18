import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [Nav, Footer, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  productos = [
    { nombre: 'Ferrari F8', precio: 200000,  imagen: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156962/d06cfae638a7e2a56d23744f9e1f8887_dvq8gv.jpg' },
    { nombre: 'Ducati Panigale', precio: 25000, imagen: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1757954275/Ducati_tv6oak.jpg' }
  ];

}
