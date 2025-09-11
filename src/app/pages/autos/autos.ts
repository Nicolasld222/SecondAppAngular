import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { FiltroCategoria } from '../../shared/filtro-categoria/filtro-categoria';
import { Paginacion } from '../../shared/paginacion/paginacion';

@Component({
  selector: 'app-autos',
  imports: [Nav, Footer, CommonModule, SearchBar, FiltroCategoria, Paginacion],
  templateUrl: './autos.html',
  styleUrl: './autos.css'
})
export class Autos {
   autos = [
    { nombre: 'Ferrari LaFerrari', descripcion: 'Híbrido italiano de altas prestaciones.', img: 'https://i.pinimg.com/736x/d0/6c/fa/d06cfae638a7e2a56d23744f9e1f8887.jpg' },
    { nombre: 'Lamborghini Aventador', descripcion: 'Diseño agresivo y motor V12.', img: 'https://i.pinimg.com/1200x/46/65/9f/46659fec7c31b4d8aad623251de85925.jpg' },
    { nombre: 'Porsche 911 Turbo S', descripcion: 'Clásico deportivo alemán.', img: 'https://i.pinimg.com/736x/2a/d7/a9/2ad7a95caf42b7caa074738fc8517452.jpg' },
    { nombre: 'Bugatti Chiron', descripcion: 'El hiperdeportivo más exclusivo.', img: 'https://i.pinimg.com/1200x/f8/55/1e/f8551ecf4aaeb7bdd76700ca5be018ca.jpg' },
    { nombre: 'McLaren 720S', descripcion: 'Tecnología británica en pista y calle.', img: 'https://i.pinimg.com/736x/b2/8f/3d/b28f3d223ff6f36cd9b383a623c8c145.jpg' },
    { nombre: 'Aston Martin DBS', descripcion: 'Elegancia y potencia inglesa.', img: 'https://i.pinimg.com/736x/79/b1/20/79b12009bc25d0375d58caf9ba18f766.jpg' },
    { nombre: 'Bentley Continental GT', descripcion: 'Lujo y velocidad combinados.', img: 'https://i.pinimg.com/1200x/39/03/aa/3903aa74a47ef2bafffa55feb43331e8.jpg' },
    { nombre: 'Rolls-Royce Wraith', descripcion: 'Máximo lujo sobre ruedas.', img: 'https://i.pinimg.com/736x/15/ec/05/15ec05dc22bf439927f13415960465ad.jpg' },
    { nombre: 'Tesla Roadster', descripcion: 'Eléctrico de alto rendimiento.', img: 'https://i.pinimg.com/736x/18/b4/d3/18b4d3d46ee6fe570fd8cd9d93e1c1aa.jpg' },
    { nombre: 'Koenigsegg Jesko', descripcion: 'Innovación sueca extrema.', img:'https://i.pinimg.com/736x/b2/ed/f9/b2edf947731ff65f925cbaa204be97e5.jpg' },
    { nombre: 'Maserati MC20', descripcion: 'La joya italiana de Maserati.', img: 'https://i.pinimg.com/736x/f4/9a/a9/f49aa906691e3d8477747bbf3b41a211.jpg' },
    { nombre: 'Pagani Huayra', descripcion: 'Exclusividad artesanal.', img: 'https://i.pinimg.com/736x/15/16/43/1516435771752a3461b82edbf80b30ab.jpg' },
    { nombre: 'Audi R8 V10', descripcion: 'Deportivo alemán con tracción quattro.', img: 'https://i.pinimg.com/736x/63/55/15/635515c87c8a45152466c9ee0936ddcb.jpg' },
    { nombre: 'Mercedes AMG GT Black Series', descripcion: 'Potencia alemana sin límites.', img: 'https://i.pinimg.com/1200x/e3/b7/2c/e3b72ce7dbc4134571b67b90c50ccd6c.jpg' },
    { nombre: 'Ford GT', descripcion: 'Supercar americano legendario.', img: 'https://i.pinimg.com/1200x/cf/22/69/cf22699434f21d5f7b13e1e82f84067a.jpg' }
  ];
}
