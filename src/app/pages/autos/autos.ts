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
    { nombre: 'Ferrari LaFerrari', descripcion: 'Híbrido italiano de altas prestaciones.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156962/d06cfae638a7e2a56d23744f9e1f8887_dvq8gv.jpg' },
    { nombre: 'Lamborghini Aventador', descripcion: 'Diseño agresivo y motor V12.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156981/46659fec7c31b4d8aad623251de85925_lpixdn.jpg' },
    { nombre: 'Porsche 911 Turbo S', descripcion: 'Clásico deportivo alemán.', img: 'https://i.pinimg.com/736x/2a/d7/a9/2ad7a95caf42b7caa074738fc8517452.jpg' },
    { nombre: 'Bugatti Chiron', descripcion: 'El hiperdeportivo más exclusivo.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157015/f8551ecf4aaeb7bdd76700ca5be018ca_tlgh5w.jpg' },
    { nombre: 'McLaren 720S', descripcion: 'Tecnología británica en pista y calle.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157034/b28f3d223ff6f36cd9b383a623c8c145_umbpjw.jpg' },
    { nombre: 'Aston Martin DBS', descripcion: 'Elegancia y potencia inglesa.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157052/79b12009bc25d0375d58caf9ba18f766_qphtsa.jpg' },
    { nombre: 'Bentley Continental GT', descripcion: 'Lujo y velocidad combinados.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157070/3903aa74a47ef2bafffa55feb43331e8_skc9q1.jpg' },
    { nombre: 'Rolls-Royce Wraith', descripcion: 'Máximo lujo sobre ruedas.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157093/15ec05dc22bf439927f13415960465ad_rr5pbt.jpg' },
    { nombre: 'Tesla Roadster', descripcion: 'Eléctrico de alto rendimiento.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157149/18b4d3d46ee6fe570fd8cd9d93e1c1aa_nhizku.jpg' },
    { nombre: 'Koenigsegg Jesko', descripcion: 'Innovación sueca extrema.', img:'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157170/b2edf947731ff65f925cbaa204be97e5_qvia9i.jpg' },
    { nombre: 'Maserati MC20', descripcion: 'La joya italiana de Maserati.', img: 'https://i.pinimg.com/736x/f4/9a/a9/f49aa906691e3d8477747bbf3b41a211.jpg' },
    { nombre: 'Pagani Huayra', descripcion: 'Exclusividad artesanal.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157187/1516435771752a3461b82edbf80b30ab_pnxeil.jpg' },
    { nombre: 'Audi R8 V10', descripcion: 'Deportivo alemán con tracción quattro.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157205/635515c87c8a45152466c9ee0936ddcb_rojfro.jpg' },
    { nombre: 'Mercedes AMG GT Black Series', descripcion: 'Potencia alemana sin límites.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157224/e3b72ce7dbc4134571b67b90c50ccd6c_sizadb.jpg' },
    { nombre: 'Ford GT', descripcion: 'Supercar americano legendario.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758157245/cf22699434f21d5f7b13e1e82f84067a_nety6z.jpg' }
  ];
}
