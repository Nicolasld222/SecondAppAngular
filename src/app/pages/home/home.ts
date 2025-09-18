import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Carts } from '../../shared/carts/carts';
import { Banner } from '../../shared/banner/banner';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Contacto } from '../../shared/contacto/contacto';
import { Boletin } from '../../shared/boletin/boletin';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Nav, Footer, SearchBar, Carts, Banner, Testimonial, Contacto, Boletin, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
 showButtons = true;           
  categoriaDestacada = 'autos';
}
