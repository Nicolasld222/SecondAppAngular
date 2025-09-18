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
    { nombre: 'BMW S1000RR', descripcion: 'Velocidad y potencia alemana.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1757954279/s100rr_skyoh9.jpg' },
    { nombre: 'Ducati Panigale V4', descripcion: 'Deportividad italiana.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1757954275/Ducati_tv6oak.jpg' },
    { nombre: 'Yamaha R1', descripcion: 'Superbike japonesa.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156464/2bb394458f850532515b97b62de2a0a4_fnm4mx.jpg' },
    { nombre: 'Kawasaki ZX-10R', descripcion: 'Máxima agresividad en pista.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156494/b47818caeb860c2139038e7b01dff041_zjqlej.jpg' },
    { nombre: 'Honda CBR1000RR', descripcion: 'Ingeniería japonesa al máximo nivel.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156610/6d4bf25f10feb5a6ceebec1ec84ca131_dphjsv.jpg' },
    { nombre: 'Suzuki GSX-R1000', descripcion: 'Equilibrio entre potencia y control.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156645/bd90c2bd2d451b49a17091ff4d3d36bb_thma43.jpg' },
    { nombre: 'Aprilia RSV4', descripcion: 'Tecnología italiana.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156725/a522f052cb746a20dab464d344bf039b_ka67p7.jpg' },
    { nombre: 'Triumph Daytona 675', descripcion: 'Versatilidad británica.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156794/ce5bf55d9149370cf28ad7b38fc079aa_tgeu04.jpg' },
    { nombre: 'MV Agusta F4', descripcion: 'Exclusividad y velocidad.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156810/72c78b22429a68f0d28814f2805946b4_br8lnr.jpg' },
    { nombre: 'Harley Sportster', descripcion: 'Estilo clásico americano.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156848/59a8e83c99f140e51cffde631879dede_q48hkf.jpg' },
    { nombre: 'Super Duke 1290', descripcion: 'Dinámica deportiva.', img: 'https://i.pinimg.com/1200x/42/b6/42/42b6422ab24ce541a38962d6d408b38f.jpg' },
    { nombre: 'Ninja H2R', descripcion: 'Potencia extrema.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156868/f82ecc470a99e80f190caef429962d1d_lb8s04.jpg' },
    { nombre: 'Ducati Monster', descripcion: 'Naked icónica.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156889/d0aa258f166616ce970bdc4455c7f622_vkbj76.jpg' },
    { nombre: 'Suzuki GSXR-750', descripcion: 'Velocidad japonesa.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156909/8bc282d78c583fdee2e834b721ee7091_d5ttfr.jpg' },
    { nombre: 'Kawasaki Z1000', descripcion: 'Algo para pista y carretera.', img: 'https://res.cloudinary.com/dwkq16pdu/image/upload/v1758156927/e647635b57abbeeb98a9de729d41c169_hsg30y.jpg' }
  ];

}
