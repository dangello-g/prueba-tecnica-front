import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'detalle', component: DetalleComponent },
    { path: "**", pathMatch: "full", redirectTo: "" }
];
