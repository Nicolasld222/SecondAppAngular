import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Autos } from './pages/autos/autos';
import { Cart } from './pages/cart/cart';
import { Motos } from './pages/motos/motos';
import { Nosotros } from './pages/nosotros/nosotros';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'autos', component: Autos },
    { path: 'motos', component: Motos },
    { path: 'nosotros', component: Nosotros },
    { path: 'cart', component: Cart },
    { path: '**', redirectTo: '' } // cualquier ruta inválida redirige a home
];
