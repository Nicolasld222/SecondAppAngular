import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { FiltroCategoria } from '../../shared/filtro-categoria/filtro-categoria';
import { Paginacion } from '../../shared/paginacion/paginacion';

@Component({
  selector: 'app-motos',
  imports: [Nav, Footer, CommonModule, SearchBar, FiltroCategoria, Paginacion],
  templateUrl: './motos.html',
  styleUrl: './motos.css'
})
export class Motos {
 motos = [
    { nombre: 'BMW S1000RR', descripcion: 'Velocidad y potencia alemana.', img: 'https://i.pinimg.com/736x/ad/90/71/ad9071c365e50b41cd7eb5585443a76b.jpg' },
    { nombre: 'Ducati Panigale V4', descripcion: 'Deportividad italiana.', img: 'https://i.pinimg.com/1200x/29/da/e6/29dae6f80166b95c3e65e4ad6e0060a8.jpg' },
    { nombre: 'Yamaha R1', descripcion: 'Superbike japonesa.', img: 'https://i.pinimg.com/736x/2b/b3/94/2bb394458f850532515b97b62de2a0a4.jpg' },
    { nombre: 'Kawasaki ZX-10R', descripcion: 'Máxima agresividad en pista.', img: 'https://i.pinimg.com/736x/b4/78/18/b47818caeb860c2139038e7b01dff041.jpg' },
    { nombre: 'Honda CBR1000RR', descripcion: 'Ingeniería japonesa al máximo nivel.', img: 'https://i.pinimg.com/1200x/6d/4b/f2/6d4bf25f10feb5a6ceebec1ec84ca131.jpg' },
    { nombre: 'Suzuki GSX-R1000', descripcion: 'Equilibrio entre potencia y control.', img: 'https://i.pinimg.com/736x/bd/90/c2/bd90c2bd2d451b49a17091ff4d3d36bb.jpg' },
    { nombre: 'Aprilia RSV4', descripcion: 'Tecnología italiana.', img: 'https://i.pinimg.com/1200x/a5/22/f0/a522f052cb746a20dab464d344bf039b.jpg' },
    { nombre: 'Triumph Daytona 675', descripcion: 'Versatilidad británica.', img: 'https://i.pinimg.com/736x/ce/5b/f5/ce5bf55d9149370cf28ad7b38fc079aa.jpg' },
    { nombre: 'MV Agusta F4', descripcion: 'Exclusividad y velocidad.', img: 'https://i.pinimg.com/1200x/72/c7/8b/72c78b22429a68f0d28814f2805946b4.jpg' },
    { nombre: 'Harley Sportster', descripcion: 'Estilo clásico americano.', img: 'https://i.pinimg.com/1200x/59/a8/e8/59a8e83c99f140e51cffde631879dede.jpg' },
    { nombre: 'Super Duke 1290', descripcion: 'Dinámica deportiva.', img: 'https://i.pinimg.com/1200x/42/b6/42/42b6422ab24ce541a38962d6d408b38f.jpg' },
    { nombre: 'Ninja H2R', descripcion: 'Potencia extrema.', img: 'https://i.pinimg.com/736x/f8/2e/cc/f82ecc470a99e80f190caef429962d1d.jpg' },
    { nombre: 'Ducati Monster', descripcion: 'Naked icónica.', img: 'https://i.pinimg.com/1200x/d0/aa/25/d0aa258f166616ce970bdc4455c7f622.jpg' },
    { nombre: 'Suzuki GSXR-750', descripcion: 'Velocidad japonesa.', img: 'https://i.pinimg.com/736x/8b/c2/82/8bc282d78c583fdee2e834b721ee7091.jpg' },
    { nombre: 'Kawasaki Z1000', descripcion: 'Algo para pista y carretera.', img: 'http://i.pinimg.com/736x/e6/47/63/e647635b57abbeeb98a9de729d41c169.jpg' }
  ];

}
