import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Carts } from '../../shared/carts/carts';
import { Banner } from '../../shared/banner/banner';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Contacto } from '../../shared/contacto/contacto';
import { Boletin } from '../../shared/boletin/boletin';

@Component({
  selector: 'app-home',
  imports: [Nav, Footer, SearchBar, Carts, Banner, Testimonial, Contacto, Boletin],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
