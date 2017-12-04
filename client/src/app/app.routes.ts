import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

const appRoutes : Routes = [
    {path: '', component:AppComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: '**', component:AppComponent}
]

export const routing = RouterModule.forRoot(appRoutes);